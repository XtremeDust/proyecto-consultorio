import React from 'react'

const col = ['ID', 'Fecha', 'Hora', 'Estado']

const data = [
    {hora: '08:00 am', id: 1, estado: 'Disponible', fecha: '2025-03-10',  status: true },
    {hora: '09:00 am', id: 2, estado: 'Reservado', fecha: '2025-03-10',  status: false },
    {hora: '10:00 am', id: 3, estado: 'Reservado',  fecha: '2025-03-10',  status: true},
    {hora: '11:00 am', id: 4, estado: 'Disponible', fecha: '2025-03-10',  status: false},
    {hora: '12:00 am', id: 5, estado: 'Disponible',  fecha: '2025-03-10', status: true},
    {hora: '01:00 pm', id: 6, estado: 'Reservado', fecha: '2025-03-10',  status: true},
    {hora: '02:00 pm', id: 7, estado: 'Disponible', fecha: '2025-03-10',  status: true},
    {hora: '03:00 pm', id: 8, estado: 'Disponible', fecha: '2025-03-10',  status: false},
    {hora: '04:00 pm', id: 9, estado: 'Reservado',  fecha: '2025-03-10', status: true},
    {hora: '05:00 pm', id: 10, estado: 'Reservado', fecha: '2025-03-10',  status: false},
    {hora: '06:00 pm', id: 11, estado: 'Reservado', fecha: '2025-03-10',  status: false},
  ]

function hora() {
  return (
    <div>
                       <table className='w-full min-w-max table-auto text-left'>
                       <thead className='text-md text-white text-center bg-gray-100 dark:bg-emerald-950 '>
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
                        {data.map((data) => (
                             <tr className="bg-white border-b text-center text-black dark:bg-gray-200 dark:border-gray-100 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-300" key={data.id}>
                                <td  className="px-6 py-4">{data.id}</td>
                                <td  className="px-6 py-4">{data.fecha}</td>
                                <td  className="px-6 py-4">{data.hora}</td>
                                <td  className="px-6 py-4">{data.estado}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
    </div>
  )
}

export default hora


