import React from 'react'
import Carousel from "@/components/main/carousel"
import Services from "@/components/main/services"
import Personal from "@/components/main/personal"
import Consulta from "@/components/main/consultas"
import Ubicanos from "@/components/main/locateUs"

function main() {
    return (
        <div className='mx-auto  justify-center items-center'>

            <section className='images p-5 my-3 rounded '>
                <Carousel />
            </section>

            <section className='serves mx-auto rounded '>
                <div id='servicios'>
                  <Services/>
                </div>
            </section>

            <section className='equipo p-5 mb-5 rounded '>
                <div id='personal'>
                    <Personal/>
                </div>
            </section>

            <section className='citas bg-slate-200 max-h-screen p-5 mb-5 rounded-2xl shadow-sm'>
                <div id='consulta'>
                    <Consulta/>
                </div>
            </section>

            <section className='ubicanos p-5 mb-5 rounded'>
                <div id='ubicacion'>
                    <Ubicanos/>
                </div>
            </section>

        </div>
    )
}

export default main
