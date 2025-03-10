import React from 'react'

const col = ['ID', 'Email', 'Telefono', 'Tipo de Cita', 'Fecha', 'Hora', 'Estado', 'Accion']

const data = [
    { 
        id: 1, 
        email: 'john@example.com', 
        tlf: '0416-5945789', 
        servicio: 'Consulta General', 
        hora: '10:00 AM',
        fecha: '2025-03-10',
        estado: 'Confirmada'
      },
      { 
        id: 2, 
        email: 'jane@example.com', 
        tlf: '0424-8045789', 
        servicio: 'Consulta Dental', 
        hora: '11:00 AM',
        fecha: '2025-03-10',
        estado: 'Confirmada'
      },
      { 
        id: 3, 
        email: 'mike@example.com', 
        tlf: '0412-1245789', 
        servicio: 'Peluquería Canina y Felina', 
        hora: '12:00 PM',
        fecha: '2025-03-10',
        estado: 'Cancelada'
      }
]

function citas() {
  return (
    <div>
                 <table className='w-full min-w-max table-auto text-left'>
                    <thead className='text-md text-center text-white  bg-gray-100 dark:bg-emerald-950 '>
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
                                <td  className="px-6 py-4">{data.email}</td>
                                <td  className="px-6 py-4">{data.tlf}</td>
                                <td  className="px-6 py-4">{data.servicio}</td>
                                <td  className="px-6 py-4">{data.fecha}</td>
                                <td  className="px-6 py-4">{data.hora}</td>
                                <td  className="px-6 py-4">{data.estado}</td>
                                <td  className="px-6 py-4"><button className='text-white bg-red-500 p-1 rounded-md transition delay-75 ease-in-out hover:-translate-y-1'
                                style={{
                                    display: data.estado==='Cancelada' ? 'none' : ''
                                }}
                                >Cancelar</button></td>
                            </tr>
                        ))}
                    </tbody>

                </table>
    </div>
  )
}

export default citas
