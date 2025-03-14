import React from 'react'
import Carousel from "@/components/carousel"
import Services from "@/components/services"
import Personal from "@/components/personal"
import Consulta from "@/components/consultas"
import Ubicanos from "@/components/locateUs"

function main() {
    return (
        <div className='mx-auto  justify-center items-center'>

            <section className='images p-5 my-3 rounded '>
                <Carousel />
            </section>

            <section className='serves mx-auto rounded '>
                <div>
                  <Services/>
                </div>
            </section>

            <section className='equipo p-5 mb-5 rounded '>
                <div>
                    <Personal/>
                </div>
            </section>

            <section className='citas bg-slate-200 max-h-screen p-5 mb-5 rounded-2xl shadow-sm'>
                <div>
                    <Consulta/>
                </div>
            </section>

            <section className='ubicanos  bg-slate-400 p-5 mb-5 rounded'>
                <div>
                    <Ubicanos/>
                </div>
            </section>

        </div>
    )
}

export default main