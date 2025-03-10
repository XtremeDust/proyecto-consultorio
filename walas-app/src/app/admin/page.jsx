"use client";
import React from 'react'
import Navbar from '@/components/admin/navbar'
import Panel from '@/components/admin/panel'

export default function page() {
  return (
<div className="flex flex-col md:flex-row h-screen">
       <Navbar/>
       <main className="flex-1 bg-slate-100 overflow-auto">
            <div className='m-2 p-2'>
            <Panel></Panel>
            </div>
        </main>
      
    </div>
  )
}
