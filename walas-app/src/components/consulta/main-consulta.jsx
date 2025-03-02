import React from 'react'

const hora = [
  {title: '09:00 am',},
  {title: '10:00 am',},
  {title: '11:00 am',},
  {title: '12:00 am',},
  {title: '01:00 pm',},
  {title: '02:00 pm',},

]

function consulta() {
  return (
    <div className=' justify-center items-center p-5'>
      <div className='bg-white text-black min-h-screen mx-auto max-w-screen-2xl px-6 m-5 lg:px-8 sm:flex-col sm:flex sm:justify-center rounded-3xl shadow-md'>
        <h2>Reserva tu consulta</h2>
        <section className='tipo'>
          <h3>Servicios</h3>
          <label htmlFor='opt'>Seleccione el tipo de servicio a reservar: </label >
          <select name="options" id="options" className=' bg-cyan-100 m-2 p-2 '>
            <option value="Selecciona un servicio">Selecciona un servicio</option>
            <option value="Consulta general">Consulta general</option>
            <option value="Consulta Dental">Consulta Dental</option>
            <option value="Peluquería Canina y Felina">Peluquería Canina y Felina</option>
          </select>
        </section>

        <section className='horarios'>
          <h3>Horarios</h3>
          <input type="datetime-local" name="" id="" />
          <div className='horas'>
          {hora.map((hora)=>(
            <button className='text-white border m-1 p-3 rounded-lg bg-green-800 hover:shadow-sm transition delay-75 ease-in-out hover:-translate-y-1 '>
                        {hora.title}
            </button>
          ))}
          
          </div>
        </section>

        <section className='datos'>
          <h3>Datos personales</h3>
          <input type="email" name="email" id="email" placeholder='email@gmail.com' />
          <input type="tel" name="tlf" id="tfl" placeholder='telefono' />
        </section>

      </div>
    </div>
  )
}

export default consulta
