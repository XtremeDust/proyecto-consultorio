import React from 'react';
import Nav from "@/components/nav";
import Footer from "@/components/footer"
import Registro from "@/components/registro"

export default function register() {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr,auto]">
      <Nav/>
      <main className='content-center'>
      <div className='py-16 sm:py-16 mx-10'>
        <Registro/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
