import React from 'react'

const post = [
    {
        id: 1,
        title: 'Consultas Médicas',
        description: 'Realizamos consultas generales, de emergencia y revisiones completas para cachorros y gatitos, con diagnósticos y tratamientos personalizados.',
        src:"./services/1.jpg",
    },
    {
        id: 2,
        title: 'Odontología Veterinaria',
        description: 'Ofrecemos limpieza dental, extracciones y tratamientos para enfermedades periodontales, asegurando la salud bucal de tu mascota.',
        src:"./services/2.jpg",
    },
    {
        id: 3,
        title: 'Peluquería Canina y Felina',
        description: 'Proporcionamos servicios de baño, corte de pelo, peinado, corte de uñas y limpieza de oídos para mantener a tu mascota limpia y arreglada.',
        src:"./services/3.jpg",
    },
]

function services() {
    return (
        <div className='bg-white py-24 sm:py-16 rounded-3xl shadow-xl'>
            <div className='mx-auto max-w-screen-2xl px-6 lg:px-8 sm:flex-col sm:flex sm:justify-center'>

                <div className='mx-auto max-w-full lg:mx-0'>
                    <h2 className='text-4xl font-semibold tracking-tight text-pretty lg:text-justify sm:text-center text-gray-900 sm:text-5xl'>
                        Sobre nuestro Servicios
                    </h2>
                    <p className='m-5 sm:mx-20 text-lg/6 text-gray-600 lg:text-justify sm:text-center '>
                    Contamos con un equipo de profesionales dedicados y apasionados por la salud animal, proporcionando una amplia gama de servicios que incluyen peluquería, odontología, consultas médicas y más. Nos esforzamos por brindar una atención de calidad para garantizar que tu mascota reciba el mejor cuidado posible.
                    </p>
                </div>

                <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-5 sm:mt-5 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
                    {post.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col ">

                            <div className=' items-center gap-x-4 text-xs'>
                                <div className='mx-auto sm:flex sm:justify-center'>
                                    <img src={post.src} alt="img" className='rounded-3xl h-[336px] w-[530px]' />
                                </div>

                                <div className="group-relative  sm:text-center">
                                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 sm:text-2xl">
                                        <div>
                                            {post.title}
                                        </div>
                                    </h3>
                                    <p className="mt-3 line-clamp-3 text-sm/5 text-gray-600">{post.description}</p>
                                </div>

                                <div className="relative mt-2 flex items-center gap-x-4">
                                    
                                </div>


                            </div>

                        </article>
                    ))

                    }
                </div>

            </div>
        </div>
    )
}

export default services