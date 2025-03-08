import React from 'react'

const persona = [{
        id: '1',
        name: 'Dra.juana Gomez',
        profesion: 'Doctora Veterinaria',
        especilidad: 'Consultas veterinarias, Exámenes de salud y diagnóstico, Vacunaciones y desparasitaciones, Cirugía general y de emergencia, Tratamientos preventivos y curativos.',
        img: './personal/veterinario-doctora.jpg',
    },
    {
        id: '2',
        name: 'Dr.Daniel Silva',
        profesion: 'peluquero',
        especilidad: 'Corte y arreglo de pelaje, Baños medicados, Desenredado y cepillado, Corte de uñas y limpieza de oídos, Tratamientos antipulgas y antigarrapatas.',
        img: './personal/veterinario-peluquero.jpg ',
    },
]

function personal() {
    return (
        <div className='rounded-3xl flex justify-center text-center'>
            <div>
                {persona.map((persona) => (
                    <article
                     key={persona.id}
                    className='bg-white flex my-8 rounded-3xl mx-auto max-w-screen-xl sm:flex-col sm:flex sm:justify-center shadow-xl'>
                        <div className='md:flex flex-flow-col'>

                            <img src={persona.img} alt="" className='rounded-3xl w-screen h-72 md:h-[300px] md:w-[300px]' />

                            <div className='content-center mx-5'>
                                <h4 className='text-4xl font-semibold tracking-tight text-pretty lg:text-center text-gray-900 sm:text-5xl'>{persona.name}</h4>
                                <h3 className="my-1 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 sm:text-2xl">
                                    <div>
                                        {persona.profesion}
                                    </div>
                                </h3>
                                <p className=' text-gray-900 my-5'>{persona.especilidad}</p>
                            </div>
                        </div>

                    </article>
                ))}

            </div>
        </div>
    )
}

export default personal