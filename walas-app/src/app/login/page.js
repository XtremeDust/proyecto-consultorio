import React from 'react';
import Nav from "@/components/nav";
import Footer from "@/components/footer"
import Login from "@/components/sesion"

export default function login() {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr,auto]">
      <Nav/>
      <main className='flex justify-center items-center min-h-[60vh]'>        
        <div className='py-8 sm:py-16'>
        <Login/>
        </div>

      </main>
      <Footer/>
    </div>
  );
}