"use client";
import React, { useState } from "react";
import axios from "axios";
import Hora from "./hora";
import "react-day-picker/style.css";

// Opciones de prefijo telefónico
const telf = [
  { tfn: "0412", id: 1 },
  { tfn: "0424", id: 2 },
  { tfn: "0414", id: 3 },
];

function Consulta() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    servicio: "",
    fecha: "",
    hora: "",
  });

  const [loading, setLoading] = useState(false); // Manejar estado de carga
  const [mensaje, setMensaje] = useState(""); // Mostrar mensajes al usuario

  const enviarDatos = async () => {
    console.log("Datos enviados:", formulario); // Debugging para verificar los datos
    setLoading(true);
    setMensaje("");

    // Validar campos obligatorios
    if (
      !formulario.nombre ||
      !formulario.apellido ||
      !formulario.email ||
      !formulario.telefono ||
      !formulario.servicio ||
      !formulario.fecha ||
      !formulario.hora
    ) {
      alert("Por favor, completa todos los campos");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost/api/registro", formulario);
      console.log("Reserva creada:", response.data);
      setMensaje("Reserva creada exitosamente");
    } catch (error) {
      console.error("Error al enviar la reserva:", error.message || error.response?.data);
      setMensaje("Ocurrió un error al crear la reserva. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="justify-center items-center p-5">
      <div className="bg-slate-100 text-black mx-auto max-w-screen-xl p-6 m-5 lg:px-8 sm:flex-col sm:flex sm:justify-center rounded-3xl shadow-md">
        <h2 className="text-4xl font-semibold text-center text-gray-900">
          Reserva tu consulta
        </h2>

        {/* Formulario */}
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Evitar recargar la página
            enviarDatos(); // Llamar a la función de envío
          }}
          className="flex flex-col items-center justify-center my-4"
        >
          <h3 className="text-2xl font-semibold text-gray-900 pb-5">Datos personales</h3>

          {/* Campo de Nombre */}
          <input
            type="text"
            placeholder="Nombre"
            className="mb-4 w-full px-3 py-2 border rounded"
            onChange={(e) =>
              setFormulario({ ...formulario, nombre: e.target.value })
            }
          />

          {/* Campo de Apellido */}
          <input
            type="text"
            placeholder="Apellido"
            className="mb-4 w-full px-3 py-2 border rounded"
            onChange={(e) =>
              setFormulario({ ...formulario, apellido: e.target.value })
            }
          />

          {/* Campo de Email */}
          <input
            type="email"
            placeholder="Email"
            className="mb-4 w-full px-3 py-2 border rounded"
            onChange={(e) =>
              setFormulario({ ...formulario, email: e.target.value })
            }
          />

          {/* Número de Teléfono */}
          <div className="flex space-x-2 items-center mb-4">
            <select
              onChange={(e) =>
                setFormulario({ ...formulario, telefono: e.target.value })
              }
              className="px-3 py-2 border rounded"
            >
              {telf.map((opcion) => (
                <option key={opcion.id} value={opcion.tfn}>
                  {opcion.tfn}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Número de teléfono"
              className="flex-grow px-3 py-2 border rounded"
              onChange={(e) =>
                setFormulario({
                  ...formulario,
                  telefono: `${formulario.telefono}${e.target.value}`,
                })
              }
            />
          </div>

          {/* Selección de Servicio */}
          <h3 className="text-xl font-semibold tracking-tight text-pretty text-center text-gray-900 sm:text-xl my-2">
            Tipo de consulta
          </h3>
          <select
            onChange={(e) =>
              setFormulario({ ...formulario, servicio: e.target.value })
            }
            className="mb-4 w-full px-3 py-2 border rounded"
          >
            <option value="">Selecciona un servicio</option>
            <option value="Consulta general">Consulta general</option>
            <option value="Consulta dental">Consulta dental</option>
          </select>

          {/* Fecha */}
          <h3 className="text-xl font-semibold tracking-tight text-pretty text-center text-gray-900 sm:text-xl my-2">
            Fecha de la consulta
          </h3>
          <input
            type="date"
            min="2025-03-16"
            max="2025-03-23"
            value={formulario.fecha || ""}
            onChange={(e) =>
              setFormulario({ ...formulario, fecha: e.target.value })
            }
            className="mb-4 w-full px-3 py-2 border rounded"
          />

          {/* Hora */}
          <h3 className="text-xl font-semibold tracking-tight text-pretty text-center text-gray-900 sm:text-xl my-2">
            Hora de la consulta
          </h3>
          <Hora
            onSeleccionarHora={(hora) =>
              setFormulario({ ...formulario, hora })
            }
          />

          {/* Botón de Enviar */}
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 bg-green-900 text-white rounded ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Enviando..." : "Agendar cita"}
          </button>
        </form>

        {mensaje && <p className="mt-4 text-center">{mensaje}</p>}
      </div>
    </div>
  );
}

export default Consulta;
