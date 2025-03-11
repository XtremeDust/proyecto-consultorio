import React from 'react'

function sesion() {
  return (

    <div className='flex justify-center items-center p-10'>
      <div className='flex flex-col md:flex-row rounded-3xl bg-gray-100 max-w-4xl w-full shadow-xl'>
          
          <div className='registro md:w-1/2 w-full flex flex-col items-center p-5'>                
                    <img src="./services/logo.png" className='h-[130px] py-2 my-5' alt="logo" />    
                    <form action="" method="post" className='flex items-center flex-col'>                        
                        <input type="email" className='my-3 p-2 w-[325px] text-black rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 focus:shadow-md' name="correo" id="email" placeholder='email' />
                        <input type="password" className='my-3 p-2 w-[325px] text-black rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 focus:shadow-md' name="contra" id="contraseña" placeholder='contraseña' />
                        <input type="submit" className='my-3 p-2 mt-7 w-[200px] bg-green-900 text-white rounded-xl cursor-pointer' value="Iniciar sesion" />
                    </form>
                    <p className='mt-3 text-black'>¿Quieres hacer una cita? <a href="/consulta/" className='text-blue-800'>Regístrate aquí</a></p>
                    
                </div>
    
                <div className='imagen w-1/2 hidden md:block rounded-s-3xl'>
                <img src="./services/mp.jpg" alt="part" className='h-full w-full object-cover rounded-e-3xl'/>
                </div>
    
            </div>
      
    </div>
  )
}
  
          
export default sesion
