import React from 'react'

const horario =[{
    id:'1',
    dia:'lunes a viernes',
    hora:'8 a.m. a 12 p.m.',
    hora1:'12 p.m. a 6 p.m.'
},{
    id:'2',
    dia:'sabado a domingo',
    hora:'10 a.m. - 12 p.m.',
    hora1:'12 p.m. a 4 p.m.',
},]

function locateUs() {
    return (
        <div className='bg-slate-100 max-w-screen-2xl py-10 sm:py-5 px-10 mx-auto flex justify-center items-center shadow-2xl rounded-3xl '>
            <div>
                <div className='mx-auto max-w-full lg:mx-0'>
                    <h2 className='text-4xl font-semibold tracking-tight text-pretty text-center text-gray-900 sm:text-5xl my-3'>
                        Ubicanos en
                    </h2>
                </div>

                <article className='flex'>
                    <div className='flex-flow-col lg:flex lg:justify-center'>
                    <div>
                        <img src="./personal/veterinaria.png" alt="" className='mx-auto rounded-3xl' />
                    </div>
                    <div className='text-gray-600 my-3 xl:text-justify sm:mx-20 sm:text-center text-2xl tracking-tight font-semibold content-center'>
                    <h3 className='my-2'>Av. Terranova, Porlamar 6301, Nueva Esparta</h3>
                    <h3>Horarios De:</h3>
                    {horario.map((horario) => (
                        <p key={horario.id}>
                            {horario.dia} <br /> {horario.hora} {horario.hora1}
                        </p>
                    ))}
                    
                    </div>
                    </div>
                    
                </article>
            </div>

        </div>
    )
}

export default locateUs
