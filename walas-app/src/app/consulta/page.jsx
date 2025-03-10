import React from 'react'
import Nav from '@/components/nav'
import Footer from "@/components/footer"
import Consulta from "@/components/consulta/main-consulta"

export default function page() {
  return (
    <div className="min-h-screen flex flex-col">

      <Nav className="fixed top-0 left-0 w-full z-50 bg-emerald-900 border-b shadow-md" />

      <div className="h-[90px] md:h-36 lg:h-36 xl:h-[90px]"/>

        <main className="flex-grow flex items-center justify-center">
          <Consulta/>
        </main>
        
        <Footer/>
      
    </div>
  )
}
