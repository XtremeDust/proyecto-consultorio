import React from 'react'

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

export default function footer() {
    return (
        <nav className="bg-[#2C3930] border-gray-200 dark:border-gray-700">
            <div className='max-w-screen flex flex-wrap mx-auto dark:bg-green-900 items-center justify-between p-2 '>

                <a href="#" className='flex items-center space-x-3'>
                    <img src="./Logo_Pet_Care_Center.png" className='h-[80px]' alt="Pet cap center Logo" />

                    <span className='self-center text-2xl font-semibold '>Pet cap center</span>
                </a>

                <div className="hidden w-full xl:block md:w-auto ">
                    <ul className='font-semibold flex flex-col p-4 md:flex-row md:space-x-8 md:mt-0 md:border-0'>
                     {nav.map((nav)=>(
                        <li>
                            <a href={nav.link} id={nav.id} className='px-4 py-2 rounded-lg hover:bg-green-800 flex items-center justify-center hover:shadow-sm transition delay-75 ease-in-out hover:-translate-y-1'>{nav.Titulo}</a>
                        </li>
                     ))}

                    </ul>
                </div>

                <div className="mr-[5px] ml-[5px] flex gap-4 items-center flex-col sm:flex-row">
                    <a className='shadow-xl rounded-full border border-solid border-black/[.08] dark:border-white/[.145]  flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-36 transition delay-200 ease-in-out hover:-translate-y-1' href="#">Sing In</a>
                    <a className='shadow-xl rounded-full border border-solid border-transparent flex items-center justify-center bg-foreground text-black/[.80] gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-40 transition delay-200 ease-in-out hover:-translate-y-1' href="#">Sing Up</a>
                </div>

  
            </div>
            <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pt-2 pb-3">
     {nav.map()

     }
      <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
    </div>
  </div>
        </nav>

    )
}
