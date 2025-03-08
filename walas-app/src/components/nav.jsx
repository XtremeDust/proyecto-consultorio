"use client";
import React, { useState } from 'react';

const nav = [{
    id: "1",
    Titulo: "Servicios",
    link: "#"
}, {
    id: "2",
    Titulo: "Nuestro Equipo",
    link: "#"

}, {
    id: "3",
    Titulo: "Agendar Cita",
    link: "#"
}, {
    id: "4",
    Titulo: "Ubicanos",
    link: "#"
}]

const buttones = [{
    id:"1",
    nombre:"Sign In",
    link: "#",
},
{
    id:"2",
    nombre:"Sign Up",
    link: "#",
}
]

export default function footer() {
    const [abrir, setAbrir] = useState(false);
    const menu = () => {
        setAbrir(!abrir);
    };

    return (
        <nav className="bg-[#2C3930] border-gray-200 dark:border-gray-700">
            {/* Contenedor Principal */}
            <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-2 dark:bg-green-900">
                {/* Logo */}
                <a href="#" className="flex items-center space-x-3">
                    <img
                        src="./Logo_Pet_Care_Center.png"
                        className="h-[80px]"
                        alt="Logo de Pet Care Center"
                    />
                    <span className="text-2xl font-semibold">Pet Care Center</span>
                </a>

                {/* Menú Principal */}
                <div className="hidden w-full xl:block md:w-auto">
                    <ul className="flex flex-col p-4 space-y-4 md:flex-row md:space-y-0 md:space-x-8 font-semibold">
                        {nav.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={item.link}
                                    className="flex items-center justify-center px-4 py-2 text-white transition-transform duration-200 ease-in-out bg-transparent rounded-lg hover:bg-green-800 hover:shadow-md hover:-translate-y-1"
                                >
                                    {item.Titulo}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Botones de Usuario y Menú desplegable */}
                <div className="flex items-center">

                    {/* Botón despliegue */}
                    <button
                        onClick={menu} // Controla el estado del menú desplegable
                        className="flex items-center p-2 rounded-3xl cursor-pointer group md:hidden"
                        aria-expanded={abrir} // Accesibilidad para indicar el estado del menú
                    >
                        <div className="space-y-2">
                            <span
                                className={`block w-10 h-1 bg-white rounded-full transition-transform duration-300 ease-in-out ${abrir ? "translate-y-1.5 rotate-45" : ""
                                    }`}
                            ></span>
                            <span
                                className={`block w-8 h-1 bg-white rounded-full transition-transform duration-300 ease-in-out ${abrir ? "-translate-y-1.5 -rotate-45 w-10" : ""
                                    }`}
                            ></span>
                        </div>
                    </button>

                    {/* Botones */}
                    <div className="hidden items-center gap-4 md:flex">
                        <a href="#" className="flex items-center justify-center px-4 py-2 text-sm transition-transform duration-200 ease-in-out bg-transparent border border-solid rounded-full shadow-xl sm:px-5 sm:h-12 sm:text-base sm:min-w-[9rem] dark:border-white/[0.145] hover:bg-gray-800 hover:border-transparent hover:-translate-y-1">
                            Sign In
                        </a>
                        <a href="#" className="flex items-center justify-center px-4 py-2 text-sm transition-transform duration-200 ease-in-out text-black/[0.80] bg-foreground gap-2 rounded-full shadow-xl sm:px-5 sm:h-12 sm:text-base sm:min-w-[10rem] hover:bg-gray-600 dark:hover:bg-gray-300 hover:-translate-y-1">
                            Sign Up
                        </a>
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
                                    <a href={item.link} className=" flex items-center justify-center px-4 py-2 text-sm transition-transform duration-200 ease-in-out text-black/[0.80]  rounded-lg hover:shadow-md hover:bg-green-800 hover:text-white hover:-translate-y-1" aria-current="page">
                                        {item.Titulo}
                                    </a>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </nav>

            {/* Menú desplegable */}
            <div
                className={`flex flex-col justify-evenly px-2 pt-2 pb-1 md:pb-3 space-y-1 bg-white  transition-all duration-300 ease-in-out md:hidden ${abrir ? "block" : "hidden"
                    }`}
                id="desplegable-menu"
            >
                {nav.map((item) => (
                    <a key={item.id} href={item.link} className="block px-3 py-2 text-base font-medium text-gray-900 bg-white hover:bg-green-800 hover:text-white rounded-md">
                        {item.Titulo}
                    </a>
                ))}
                <div className="flex flex-col justify-between space-y-1">
                    {buttones.map((item)=>(
                    <a href={item.link} key={item.id} className="block px-3 py-2 text-base font-medium text-gray-900 bg-white rounded-md hover:bg-green-800 hover:text-white"> {item.nombre} </a>
                    ))}
                </div>
            </div>
        </nav>


    )
}
