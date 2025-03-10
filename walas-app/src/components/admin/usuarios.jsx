import React from 'react'

const col = ['ID', 'Nombre', 'Telefono', 'Email']

const data = [
    { id: 1, name: 'John Doe', tlf: '0416-5945789', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', tlf: '0424-8045789', email: 'J@example.com' },
    { id: 3, name: 'Mike Johnson', tlf: '0412-1245789', email: 'mike@example.com' },
]



function usuarios() {
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
                    {data.map((data) => (
                         <tr className="bg-white border-b text-center text-black dark:bg-gray-200 dark:border-gray-100 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-300" key={data.id}>
                            <td className="px-6 py-4">{data.id}</td>
                            <td className="px-6 py-4">{data.name}</td>
                            <td className="px-6 py-4">{data.tlf}</td>
                            <td className="px-6 py-4">{data.email}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default usuarios
