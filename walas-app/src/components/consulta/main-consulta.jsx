"use client";
import React, { useState } from 'react';
import Calendario from "./fecha";


const hora = [
  { title: '08:00 am', id: 1, status: true },
  { title: '09:00 am', id: 2, status: false },
  { title: '10:00 am', id: 3, status: true },
  { title: '11:00 am', id: 4, status: false },
  { title: '12:00 am', id: 5, status: true },
  { title: '01:00 pm', id: 6, status: true },
  { title: '02:00 pm', id: 7, status: true },
  { title: '03:00 pm', id: 8, status: false },
  { title: '04:00 pm', id: 9, status: true },
  { title: '05:00 pm', id: 10, status: false },
  { title: '06:00 pm', id: 11, status: false },
]

const telf = [
  { tfn: '0412', id: 1, },
  { tfn: '0424', id: 2, },
  { tfn: '0414', id: 3, },
]

function consulta() {

  const [selecionaH, setSelectH] = useState(null);

  return (
    <div className=' justify-center items-center p-5'>
      <div className='bg-slate-100 text-black mx-auto max-w-screen-xl p-6 m-5 lg:px-8 sm:flex-col sm:flex sm:justify-center rounded-3xl shadow-md'>
        <h2 className='text-4xl font-semibold tracking-tight text-pretty  text-center text-gray-900 sm:text-4xl'>Reserva tu consulta</h2>


        <form action="" className='flex flex-col items-center justify-center my-4'>


          <h3 className='text-3xl lg:text-justify font-semibold tracking-tight text-pretty text-center text-gray-900 sm:text-3xl'>Datos personales</h3>

          <div className="w-[55%] my-5 max-w-sm min-w-[200px]">
            <input type='text' name='nom' className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease hover:bg-neutral-100 focus:outline-none focus:border-teal-500 hover:border-teal-300 shadow-sm focus:shadow focus:bg-neutral-100" placeholder="Nombre" />
          </div>

          <div className="w-[55%] max-w-sm min-w-[200px]">
            <input type='text' name='ape' className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease hover:bg-neutral-100 focus:outline-none focus:border-teal-500 hover:border-teal-300 shadow-sm focus:shadow focus:bg-neutral-100" placeholder="Apellido" />
          </div>

          <div className="w-[55%] my-5 max-w-sm min-w-[200px]">
            <input type='email' name='ema' className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease hover:bg-neutral-100 focus:outline-none focus:border-teal-500 hover:border-teal-300 shadow-sm focus:shadow focus:bg-neutral-100" placeholder="Email" />
          </div>

          <div className="w-[55%] max-w-sm min-w-[200px]">
            <label htmlFor='options' className="block mb-1 text-sm text-slate-600">
              Numero de Telefono
            </label>
            <div className="relative mt-2">
              <div className="absolute ">
                <select name="options" id="options" className='bg-transparent p-[7.5px] m-[1px] rounded-md border border-r-slate-300 focus:outline-none focus:border-teal-500 hover:border-teal-300 focus:bg-neutral-100 '>
                  {telf.map((telf) => (
                    <option key={telf.id} value={telf.tfn}>{telf.tfn}</option>
                  ))}
                </select>
              </div>
              <input
                name="num"
                type="text"
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-20  pr-3 py-2 transition duration-300 ease  hover:bg-neutral-100 focus:outline-none focus:border-teal-500 hover:border-teal-300 focus:bg-neutral-100 shadow-sm focus:shadow"
                placeholder="Numero" />
            </div>
          </div>

          <h3 className='text-3xl font-semibold tracking-tight text-pretty lg:text-justify text-center mt-5 text-gray-900 sm:text-3xl'>Servicios</h3>

          <div className="w-[55%] max-w-sm min-w-[200px]  my-5">
            <label htmlFor='opt' className="block mb-1 text-sm text-slate-600">
              Seleccione el tipo de servicio a reservar
            </label>

            <select name="opt" id="opt" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease hover:bg-neutral-100 focus:outline-none focus:border-teal-500 hover:border-teal-300 shadow-sm focus:shadow focus:bg-neutral-100">
              <option value="Selecciona un servicio">Selecciona un servicio</option>
              <option value="Consulta general">Consulta general</option>
              <option value="Consulta Dental">Consulta Dental</option>
              <option value="Peluquería Canina y Felina">Peluquería Canina y Felina</option>
            </select>
          </div>

          <h3 className='text-3xl font-semibold tracking-tight text-pretty lg:text-justify text-center text-gray-900 sm:text-3xl mt-2'>Fecha de la consulta</h3>
          <div className='datos consulta flex flex-col items-center lg:flex-row'>

            <section className='dia m-2 p-5 '>
              <div className="dias my-3 flex flex-col items-center justify-center">
                <h3 className='text-2xl font-semibold tracking-tight text-pretty lg:text-justify text-center text-gray-900 sm:text-2xl'>Dia de la consulta</h3>
                <Calendario></Calendario>
              </div>
            </section>

            <section className='hora m-2 '>
              <h3 className='text-2xl font-semibold tracking-tight text-pretty text-center text-gray-900 sm:text-2xl'>Hora disponible</h3>
              <div className='horas grid grid-cols-4 m-3'>

                {hora.map((hora, index) => (
                  <button
                    type="button"
                    key={hora.id}
                    id={index}
                    className={`text-white border m-2 p-3 rounded-lg hover:shadow-sm transition delay-75 ease-in-out hover:-translate-y-1 ${selecionaH === hora.title ? "bg-green-900" : "bg-slate-600"
                      }`}
                    onClick={() => setSelectH(hora.title)}
                    hidden={!hora.status}
                  >
                    {hora.title}
                  </button>

                ))}
              </div>

              <div className='horaSeleccionada text-center'>
                {selecionaH ? `Hora seleccionada: ${selecionaH}` : "Por Favor seleccione la hora."}
              </div>
            </section>

          </div>


          <input type="submit" className='m-3 p-2 w-[200px] bg-green-900 text-white rounded-xl cursor-pointer' value="Agendar cita" />

        </form>


      </div>
    </div>
  )
}

export default consulta

