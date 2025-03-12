"use client"
import React, { useState, useEffect } from "react";
const col = ['ID', 'Cliente', 'Doctor', 'Consulta', 'Fecha', 'Hora', 'Estado', 'Accion']


function citas() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [consulta, setConsulta] = useState([]);

      
    useEffect(() => {
        fetch("http://localhost/api/queries")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setConsulta(result);
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
            <div>
                <table className='w-full min-w-max table-auto text-left'>
                    <thead className='text-md text-center text-white  bg-gray-100 dark:bg-emerald-950 '>
                        <tr>
                            {col.map((fila, index) => (
                                <th key={index} scope="col" className="px-6 py-3"
                                    variant='small'
                                    color='blue-gray' >

                                    {fila}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {consulta.map((data) => (
                            <tr className="bg-white border-b text-center text-black dark:bg-gray-200 dark:border-gray-100 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-300" key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.Cliente}</td>
                                <td>{data.Doctor}</td>
                                <td>{data.consulta.servicio}</td>
                                <td>{data.fecha.day}</td>
                                <td>{data.hora.hour}</td>
                                <td>{data.estado.Estado}</td>
                                <td className="px-6 py-4"><button className='text-white bg-red-500 p-1 rounded-md transition delay-75 ease-in-out hover:-translate-y-1'
                                    style={{
                                        display: data.estado === 'Cancelada' ? 'none' : ''
                                    }}
                                >Cancelar</button></td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        );
    }
}

export default citas
