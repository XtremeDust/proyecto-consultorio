import React from 'react';
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Login from "@/components/login/sesion";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Nav className="fixed top-0 left-0 w-full z-50 bg-emerald-900 border-b shadow-md" />
     
      <div className="h-[80px] md:h-32 lg:h-32 xl:h-[80px]" />
      
      <main className="flex-grow flex items-center justify-center">
        <Login />
      </main>

     <Footer />
    </div>
  );
}
