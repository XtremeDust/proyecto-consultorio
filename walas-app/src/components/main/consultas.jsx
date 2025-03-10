import React from 'react'
import Link from 'next/link';

function consultas() {
    return (
        <div className='bg-slate-100  max-h-screen py-10 sm:py-5 px-10 sm:flex-col sm:flex sm:justify-center shadow-2xl rounded-3xl'>
            <div className='flex max-w-screen  m-5 justify-between md:flex flex-flow-col  '>

                <div className='group-relative  sm:text-center  content-center mx-5'>
                    <h3 className='text-4xl font-semibold tracking-tight text-pretty 2xl:text-justify lg:text-center text-gray-900 sm:text-5xl'>Clínica veterinaria en Línea</h3>
                    <p className=' text-gray-600 my-3 xl:text-justify sm:mx-20 sm:text-center text-2xl tracking-tight font-semibold '>Reserva consultas con médicos expertos desde la comodidad de tu hogar</p>
                    <div className='flex items-center justify-center'>
                    <Link  className='shadow-sm rounded-full border border-solid border-transparent flex items-center justify-center hover:shadow-sm transition-transform duration-200 ease-in-out dark:bg-emerald-900 gap-2 hover:dark:bg-emerald-950 hover:-translate-y-1 text-lg sm:text-base h-30 sm:h-12 px-4 sm:px-5 sm:min-w-40 ' href="/consulta">Haz tu Cita</Link>
                    </div>
                    
                </div>

                <div className=''>
                    <img src="./services/mp.jpg" alt="" className='rounded-3xl hidden xl:block shadow-lg h-[400px] max-w-screen-md'/>
                </div>
            </div>
        </div>
    )
}

export default consultas
