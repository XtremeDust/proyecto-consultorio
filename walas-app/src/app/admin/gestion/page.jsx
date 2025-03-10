import React from 'react'
import Navbar from '@/components/admin/navbar'
import Gestion from '@/components/admin/gestion'

function page() {
    return (
        <div className="flex flex-col md:flex-row h-screen">
       <Navbar/>
       <main className="flex-1 bg-white overflow-auto">
            <div className='m-2 p-2'>
                <Gestion/>
            </div>
        </main>
        </div>
    )
}

export default page
