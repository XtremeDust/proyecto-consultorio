"use client";
import React, { useState, useEffect } from "react";

const convertirHora = (hora24) => {
  const [horas, minutos] = hora24.split(":"); // Divide la cadena en horas y minutos
  const hora = parseInt(horas); // Convierte las horas a número
  const periodo = hora >= 12 ? "PM" : "AM"; // Determina si es AM o PM
  const hora12 = hora % 12 || 12; // Convierte las horas al formato de 12 horas (0 se convierte a 12)
  return `${hora12}:${minutos} ${periodo}`; // Devuelve la hora en formato AM/PM
};

function hora({ onSeleccionarHora }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hora, setUsers] = useState([]);
  const [selecionaH, setSelectH] = React.useState(null);

  useEffect(() => {
    fetch("http://localhost/api/horas")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsers(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (

      <div className="horas grid grid-cols-4 m-3 items-center justify-center text-center">
        {hora.map((data, index) => (
          <button
            type="button"
            key={data.hour}
            id={index}
            className={`text-white border m-2 p-3 rounded-lg hover:shadow-sm transition delay-75 ease-in-out hover:-translate-y-1 ${selecionaH === data.hour ? "bg-green-900" : "bg-slate-600"
              }`}
            onClick={() =>{ setSelectH(data.hour);
              onSeleccionarHora(data.hour); 
            }
            }
            hidden={!data.hour}
          >
            {convertirHora(data.hour)
            
            }
          </button>

        ))}

        <div className='horaSeleccionada text-center'>
          {
          selecionaH ? `Hora seleccionada: ${convertirHora(selecionaH)}` : "Por Favor seleccione la hora."}
        </div>

        

      </div>
    );
  }
}

export default hora
