"use client";
import React, { useState, useEffect } from "react";

const col = ['ID', 'Nombre', 'Telefono', 'Telefono', 'Email', 'Especialidad']

function doctor() {

    const [error, setError] = useState(null);
     const [isLoaded, setIsLoaded] = useState(false);
     const [doctor, setDoctors] = useState([]);
   
     useEffect(() => {
       fetch("http://localhost/api/doctor")
         .then((res) => res.json())
         .then(
           (result) => {
             setIsLoaded(true);
             setDoctors(result);
           },
           (error) => {
             setIsLoaded(true);
             setError(error);
           }
         );
     }, []);
   
     if (error) {
       return <div>Error: {error.message}</div>;
     } else if (!isLoaded) {
       return <div>Loading...</div>;
     } else {
       return (
         
    <div>
    <table className='w-full min-w-max table-auto text-center'>
    <thead className='text-md text-white bg-gray-100 dark:bg-emerald-950 '>
            <tr>
                {col.map((fila, index) => (
                    <th key={index} scope="col" className="px-6 py-3"
                        variant='small'
                        color='blue-gray' >

                        {fila}
                    </th>
                ))}
            </tr>
        </thead>

        <tbody>
            {doctor.map((data) => (
                 <tr className="bg-white border-b text-center text-black dark:bg-gray-200 dark:border-gray-100 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-300" key={data.id_doctor}>
                    <td className="px-6 py-4">{data.id_doctor}</td>
                    <td className="px-6 py-4">{data.user.name}</td>
                    <td className="px-6 py-4">{data.user.last_name}</td>
                    <td className="px-6 py-4">{data.user.telefono}</td>
                    <td className="px-6 py-4">{data.user.email}</td>
                    <td className="px-6 py-4">{data.especialidad}</td>

                </tr>
            ))}
        </tbody>

    </table>
</div>
       );
     }
}

export default doctor
