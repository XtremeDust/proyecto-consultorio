import React from 'react'
import Doctores from '@/components/admin/doctor'
import Clientes from '@/components/admin/cliente'
import Citas from '@/components/admin/citas'
import Agenda from '@/components/admin/hora'
import User from  '@/components/admin/user'

function gestion() {
    return (
        <div >

<section className="px-8 py-4">
      <h1 className="text-3xl text-center text-black py-3">Citas</h1>
      <div className="h-full w-full overflow-x-auto">
        <Citas />
      </div>
    </section>

    <section className="px-8">
      <h1 className="text-3xl text-center text-black py-3">Agenda</h1>
      <div className="h-full w-full overflow-x-auto">
        <Agenda />
      </div>
    </section>

    <section className="px-8 py-4">
      <h1 className="text-3xl text-center text-black py-3">Usuarios</h1>
      <div className="h-full w-full overflow-x-auto">
      <User></User>
      </div>
    </section>

    <section className="px-8 py-4">
      <h1 className="text-3xl text-center text-black py-3">Doctores</h1>
      <div className="h-full w-full overflow-x-auto">
      <Doctores/>
      </div>
    </section>

    <section className="px-8 py-4">
      <h1 className="text-3xl text-center text-black py-3">Clientes</h1>
      <div className="h-full w-full overflow-x-auto">
      <Clientes/>
      </div>
    </section>


        </div>
    )
}

export default gestion
