import React from 'react'
import Nav from '@/components/nav'
import Footer from "@/components/footer"
import Consulta from "@/components/consulta/main-consulta"

export default function page() {
  return (
    <div className='grid min-h-screen grid-rows-[auto,1fr,auto]'>
      <Nav></Nav>
      <main className='content-center'>
        <Consulta></Consulta>
      </main>
      <Footer></Footer>
    </div>
  )
}
