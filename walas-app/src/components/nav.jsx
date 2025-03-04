import React from 'react'
import Link from 'next/link';

export default function navbar() {
    return (
        <nav className=" border-gray-200 dark:border-gray-700">
        <div className='max-w-screen flex flex-wrap mx-auto dark:bg-green-900 items-center justify-between p-2'>

            <Link href="/" className='flex items-center space-x-3'>
                <img  src="./Logo_Pet_Care_Center.png" className='h-[80px]' alt="Pet cap center Logo"/>
           
                <span className='self-center text-2xl font-semibold '>Pet cap center</span>
                </Link>

            <div className="hidden w-full xl:block md:w-auto ">
                <ul className='font-semibold flex flex-col p-4 md:flex-row md:space-x-8 md:mt-0 md:border-0'>
                    <li>
                        <a href="/#servicios" className='px-4 py-2 rounded-lg hover:bg-green-800 flex items-center justify-center hover:shadow-sm transition delay-75 ease-in-out hover:-translate-y-1'>Servicios</a></li>
                    <li>
                        <a href="/#personal" className='px-4 py-2 rounded-lg hover:bg-green-800 flex items-center justify-center hover:shadow-sm transition delay-75 ease-in-out hover:-translate-y-1'>Nuestro Equipo</a>
                    </li>
                    <li>
                        <a href="/#consulta" className='px-4 py-2 rounded-lg hover:bg-green-800 flex items-center justify-center hover:shadow-sm transition delay-75 ease-in-out hover:-translate-y-1'>Agendar Cita</a>
                    </li>
                    <li>
                        <a href="/#ubicacion" className='px-4 py-2 rounded-lg hover:bg-green-800 flex items-center justify-center hover:shadow-sm transition delay-75 ease-in-out hover:-translate-y-1'>Ubicanos</a>
                    </li>
                </ul>
            </div>

            <div className="mr-[5px] ml-[5px] gap-4 items-center flex-col sm:flex-row hidden md:block">
                    <ul className='font-semibold flex flex-col p-4 md:flex-row md:space-x-8 md:mt-0 md:border-0'>
                        <li><Link className='shadow-xl rounded-full border border-solid border-black/[.08] dark:border-white/[.145]  flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-36 transition delay-200 ease-in-out hover:-translate-y-1' href="/login">Sing In</Link></li>
                        <li><Link className='shadow-xl rounded-full border border-solid border-transparent flex items-center justify-center bg-foreground text-black/[.80] gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-40 transition delay-200 ease-in-out hover:-translate-y-1' href="/register">Sing Up</Link></li>
                    </ul>
                    
                    
            </div>

        </div>
        </nav>
    )
}
