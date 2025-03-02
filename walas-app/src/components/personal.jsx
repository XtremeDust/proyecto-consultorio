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
        <div className='flex justify-center text-center px-5'>            
            <div className='max-w-screen-lg w-full'>
                <h3 className='text-4xl font-semibold text-black sm:text-5xl mb-10'>
                    consultas con especilistas
                </h3>

                {persona.map((persona) => (
                    <article
                     key={persona.id}
                    className='bg-white flex flex-col md:flex-row my-8 rounded-3xl mx-auto shadow-xl overflow-hidden'>
                        
                        <div className='md:w-1/3'>

                            <img src={persona.img} alt="{persona.name}" className='h-full w-full object-cover rounded-l-3xl md:rounded-none' />
                            </div>
                            <div className='md:w-2/3 flex flex-col justify-center p-6'>
                                <h4 className='text-2xl font-semibold text-gray-900 sm:text-4xl'>{persona.name}</h4>
                                <h3 className="text-lg font-medium text-gray-700 sm:text-xl mt-2">
                                    <div>
                                        {persona.profesion}
                                    </div>
                                </h3>
                                <p className=' text-gray-600 mt-4'>{persona.especilidad}</p>
                            </div>
                       

                    </article>
                ))}

            </div>
        </div>
    )
}

export default personal
