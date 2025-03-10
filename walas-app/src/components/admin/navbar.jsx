"use client";
import React, { useState } from 'react'
import Link from 'next/link';

const nav = [
    {
        id: "1",
        Titulo: "Panel de Control",
        Link: "/admin/",
        image: "/admin/informe.png",
        imgNom: "panel",
    },
    {
        id: "2",
        Titulo: "Consultas",
        Link: "/admin/gestion",
        image: "/admin/gestion-de-proyectos.png",
        imgNom: "gestion",
    },
    {
        id: "3",
        Titulo: "Perfil",
        Link: "/admin/profile",
        image: "/admin/usuario.png",
        imgNom: "user",
    },
    {
        id: "4",
        Titulo: "Salir",
        Link: "/",
        image: "/admin/cerrar-sesion.png",
        imgNom: "cerrar",
    },
]

function navbar() {
    const [estad, setEstado] = useState('rotate(90deg)');

    //alternar
    const alterEst = () => {
        setEstado(!estad);
    }

    //menu de despliegue
    const [abrir, setAbrir] = useState(false);
    const menu = () => {
        setAbrir(!abrir);
    };

    return (
        <nav className="w-full md:w-1/4 bg-emerald-900 border-r shadow-sm flex-shrink-0">
            <div className="py-3 px-4 flex justify-between items-center">
                <Link href="/admin" className="flex items-center space-x-3">
                    <img
                        src="/Logo_Pet_Care_Center.png"
                        className="h-[60px] md:h-[80px]"
                        alt="Pet cap center Logo"
                    />
                    <span className="text-white text-xl md:text-2xl font-semibold">
                        Pet cap center
                    </span>
                </Link>
                <button
                    onClick={() => {
                        menu();
                        alterEst();
                    }}
                    style={{
                        direction: "rtl",
                        transform: estad ? "rotate(-90deg)" : "rotate(90deg)",
                    }}
                    className="p-1.5 md:hidden block bg-white/65 hover:bg-white/85 text-black rounded-full transition ease-in-out"
                >
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                </button>
            </div>
            <ul className="md:flex flex-col p-3 hidden">
                {nav.map((item) => (
                    <li className="m-2" key={item.id}>
                        <a
                            href={item.Link}
                            className="flex items-center gap-4 px-4 py-2 text-white transition duration-150 ease-in-out rounded-lg hover:bg-emerald-950"
                        >
                            <img src={item.image} alt={item.imgNom} className="w-12" />
                            {item.Titulo}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Menú desplegable */}
            <div onClick={menu}
                className={`flex flex-col justify-evenly px-2 pt-2 pb-1 md:pb-3 space-y-1 bg-slate-200  transition-all duration-300 ease-in-out md:hidden ${abrir ? "block" : "hidden"
                    }`}
                id="desplegable-menu"
            >
                {nav.map((item) => (
                    <a key={item.id} href={item.Link} className={`block px-3 py-2 text-base font-medium text-gray-900 bg-slate-200 hover:dark:bg-emerald-950 hover:text-white rounded-md "`}>
                        {item.Titulo}
                    </a>
                ))}
            </div>
        </nav>
    )
}

export default navbar
