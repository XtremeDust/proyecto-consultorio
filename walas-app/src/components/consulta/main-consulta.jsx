"use client";
import React, {useState} from 'react';
import Calendario from "./fecha";


const hora = [
  {title: '08:00 am', id: 1,  status: true },
  {title: '09:00 am', id: 2,  status: false },
  {title: '10:00 am', id: 3,  status: true},
  {title: '11:00 am', id: 4,  status: false},
  {title: '12:00 am', id: 5,  status: true},
  {title: '01:00 pm', id: 6,  status: true},
  {title: '02:00 pm', id: 7,  status: true},
  {title: '03:00 pm', id: 8,  status: false},
  {title: '04:00 pm', id: 9,  status: true},
  {title: '05:00 pm', id: 10, status: false},
  {title: '06:00 pm', id: 11, status: false},
]

const telf=[
  {tfn: '0412', id: 1,},
  {tfn: '0424', id: 2,},
  {tfn: '0414', id: 3,},
]

function consulta() {

  const [selecionaH, setSelectH] = useState(null);
  
  return (
    <div className=' justify-center items-center p-5'>
      <div className='bg-slate-200 text-black mx-auto max-w-screen-xl p-6 m-5 lg:px-8 sm:flex-col sm:flex sm:justify-center rounded-3xl shadow-md'>
        <h2 className='text-4xl font-semibold tracking-tight text-pretty text-center text-gray-900 sm:text-4xl'>Reserva tu consulta</h2>
        

        <form action="" className='flex flex-col items-center justify-center my-4'>
        
        <div className='datos m-5 flex flex-col lg:flex-row '>
          <section className='datos m-5'>
            <h3 className='text-3xl font-semibold tracking-tight text-pretty lg:text-justify text-center text-gray-900 sm:text-3xl'>Datos personales</h3> 
            <div className='correo'>
            <label htmlFor="email">Correo electronico: </label>
            <input type="email" name="email" id="email" className='my-2 p-2' placeholder='email@gmail.com' />
            </div>
            
            <div className='numero'>
            <label htmlFor="tfl">Numero de Telefono: </label>
            <select name="options" id="options" className=' bg-cyan-200 m-2 p-1.5 '>
              {telf.map((telf)=>(
              <option key={telf.id} value={telf.tfn}>{telf.tfn}</option>  
              ))}
            </select>
            <input type="tel" name="tlf" id="tfl" className='m-2 p-1 w-[100px]  bg-cyan-200 ' placeholder='1541562' />
            </div>
          </section>

          <section className='tipo m-5'>

            <h3 className='text-3xl font-semibold tracking-tight text-pretty lg:text-justify text-center text-gray-900 sm:text-3xl'>Servicios</h3>
            <label htmlFor='opt'>Seleccione el tipo de servicio a reservar: </label >
            <select name="options" id="options" className=' bg-cyan-100 m-2 p-2 '>
              <option value="Selecciona un servicio">Selecciona un servicio</option>
              <option value="Consulta general">Consulta general</option>
              <option value="Consulta Dental">Consulta Dental</option>
              <option value="Peluquería Canina y Felina">Peluquería Canina y Felina</option>
            </select>
            
          </section>
        </div>

        <h3 className='text-3xl font-semibold tracking-tight text-pretty lg:text-justify text-center text-gray-900 sm:text-3xl'>Fecha de la consulta</h3>
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

          {hora.map((hora)=>(
            <button type='button' key={hora.id} className='text-white border m-2 p-3 rounded-lg hover:shadow-sm transition delay-75 ease-in-out hover:-translate-y-1 '
            onClick={() => setSelectH(hora.title)} 
            disabled={!hora.status} // este solo los deja de seleccionar disabled={!hora.status}   //este elimina los false hidden={!hora.status}
            style={{
              backgroundColor: selecionaH === hora.title  ? '#14522D' : 'gray',
              color: 'white',
            }}
            >
                        {hora.title}
            </button>
          ))}
          </div>

          <div className='horaSeleccionada text-center'>
            {selecionaH ? `Hora seleccionada: ${selecionaH}`:"Por Favor seleccione la hora."}
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
