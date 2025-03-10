"use client";
import React, { useState } from 'react'
import Link from 'next/link';

const nav = [{
    id: "1",
    Titulo: "Servicios",
    link: "/#servicios"
}, {
    id: "2",
    Titulo: "Nuestro Equipo",
    link: "/#personal"

}, {
    id: "3",
    Titulo: "Agendar Cita",
    link: "/#consulta"
}, {
    id: "4",
    Titulo: "Ubicanos",
    link: "/#ubicacion"
}]

const buttones = [{
    id: "1",
    nombre: "Sign In",
    link: "/login",
},
{
    id: "2",
    nombre: "Sign Up",
    link: "/register",
}
]


export default function navbar() {
    const [abrir, setAbrir] = useState(false);
    const menu = () => {
        setAbrir(!abrir);
    };
    return (
        <nav className=" fixed top-0 left-0 w-full bg-emerald-900 border-b border-gray-200 dark:border-gray-700 shadow-md z-50">
            <div className='max-w-screen flex flex-wrap mx-auto items-center justify-between p-2 dark:bg-emerald-900 '>
                {/* Logo */}
                <Link href="/" className='flex items-center space-x-3'>
                    <img src="./Logo_Pet_Care_Center.png" className='h-[80px]' alt="Pet cap center Logo" />

                    <span className='self-center text-2xl font-semibold '>Pet cap center</span>
                </Link>

                {/* Menú Principal */}
                <div className="hidden w-full xl:block md:w-auto">
                    <ul className="flex flex-col p-2 space-y-4 md:flex-row md:space-y-0 md:space-x-8 font-semibold">
                        {nav.map((item) => (
                            <li key={item.id}>
                                <a href={item.link} className="flex items-center justify-center px-4 py-2 text-white transition-transform duration-200 ease-in-out bg-transparent rounded-lg hover:dark:bg-emerald-950 hover:shadow-sm hover:-translate-y-1"
                                >
                                    {item.Titulo}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>


                {/*Botones*/}
                <div className="flex items-center">
                    {/* Botón despliegue */}
                    <button onClick={menu} // Controla el estado del menú desplegable
                        className="flex items-center p-2 rounded-3xl cursor-pointer group md:hidden"
                        aria-expanded={abrir} // Accesibilidad para indicar el estado del menú
                    >
                        <div className="space-y-2">
                            <span
                                className={`block w-10 h-1 bg-white rounded-full transition-transform duration-300 ease-in-out ${abrir ? "translate-y-[18px] rotate-45" : ""
                                    }`}
                            ></span>
                            <span
                                className={`block w-10 h-1 bg-white rounded-full transition-transform duration-300 ease-in-out ${abrir ? "translate-y-1.5 rotate-45" : ""
                                    }`}
                            ></span>
                            <span
                                className={`block w-10 h-1 bg-white rounded-full transition-transform duration-300 ease-in-out ${abrir ? "-translate-y-1.5 -rotate-45 w-10" : ""
                                    }`}
                            ></span>
                        </div>
                    </button>

                    {/*resgistro y inicio */}
                    <div className="hidden items-center gap-4 md:flex">
                        <ul className='font-semibold flex flex-col p-4 md:flex-row md:space-x-8 md:mt-0 md:border-0'>
                            <li><Link className='flex items-center justify-center px-4 py-2 text-sm transition-transform duration-200 ease-in-out border  border-solid border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] hover:dark:bg-emerald-950  bg-transparent  gap-2 rounded-full shadow-xl sm:px-5 sm:h-12 sm:text-base sm:min-w-[10rem] hover:-translate-y-1' href="/login">Sing In</Link></li>
                            <li><Link className='flex items-center justify-center px-4 py-2 text-sm transition-transform duration-200 ease-in-out text-black/[0.80] bg-foreground gap-2 rounded-full shadow-xl sm:px-5 sm:h-12 sm:text-base sm:min-w-[10rem] hover:bg-gray-600 dark:hover:bg-gray-300 hover:-translate-y-1' href="/register">Sing Up</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* sub-menu */}
            <nav className="bg-white hidden md:block xl:hidden">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            {nav.map((item) => (
                                <li key={item.id}>
                                    <a href={item.link} className=" flex items-center justify-center px-4 py-2 text-sm transition-transform duration-200 ease-in-out text-black/[0.80]  rounded-lg hover:shadow-md hover:dark:bg-emerald-950 hover:text-white hover:-translate-y-1" aria-current="page">
                                        {item.Titulo}
                                    </a>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </nav>

            {/* Menú desplegable */}
            <div onClick={menu}
                className={`flex flex-col justify-evenly px-2 pt-2 pb-1 md:pb-3 space-y-1 bg-white  transition-all duration-300 ease-in-out md:hidden ${abrir ? "block" : "hidden"
                    }`}
                id="desplegable-menu"
            >
                {nav.map((item) => (
                    <a key={item.id} href={item.link} className={`block px-3 py-2 text-base font-medium text-gray-900 bg-white hover:dark:bg-emerald-950 hover:text-white rounded-md "`}>
                        {item.Titulo}
                    </a>
                ))}
                <div className="flex flex-col justify-between space-y-1">
                    {buttones.map((item) => (
                        <a href={item.link} key={item.id} className="block px-3 py-2 text-base font-medium text-gray-900 bg-white rounded-md hover:dark:bg-emerald-950 hover:text-white"> {item.nombre} </a>
                    ))}
                </div>
            </div>

        </nav>
    )
}
