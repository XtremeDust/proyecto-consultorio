import React from 'react'

function registro() {
  return (

    <div className='flex justify-center items-center p-10'>
      <div className='flex flex-col md:flex-row rounded-3xl bg-gray-100 max-w-4xl w-full shadow-xl'>
        
      <div className='imagen w-1/2 hidden md:block rounded-s-3xl'>
                <img src="./services/mp.jpg" alt="part" className='h-full w-full object-cover rounded-s-3xl'/>
                </div>

        <div className='registro md:w-1/2 w-full flex items-center flex-col p-5 mx-5'>

        <img src="./services/logo.png" className='h-[130px] py-2 my-2' alt="logo" />    

        <form action="" method="post" className='flex flex-col items-center'>
            <input className='my-3 p-2 w-[325px] rounded-xl text-black border border-gray-300  focus:outline-none focus:border-blue-500 focus:shadow-md' type="text" placeholder='Nombre' />
            <input className='my-3 p-2 w-[325px] rounded-xl text-black border border-gray-300  focus:outline-none focus:border-blue-500 focus:shadow-md' type="text" placeholder='Apellido' />
            <input className='my-3 p-2 w-[325px] rounded-xl text-black border border-gray-300  focus:outline-none focus:border-blue-500 focus:shadow-md' type="email" name="correo" id="electronico" placeholder='email' />
            <input className='my-3 p-2 w-[325px] rounded-xl text-black border border-gray-300  focus:outline-none focus:border-blue-500 focus:shadow-md' type="text" placeholder='telefono ' />
            <input className='my-3 p-2 w-[325px] text-black rounded-xl border border-gray-300  focus:outline-none focus:border-blue-500 focus:shadow-md' type="password" name="contra" placeholder='contraseña' id="contarseña" />
            <input className='my-3 p-2 w-[325px] text-black rounded-xl border border-gray-300  focus:outline-none focus:border-blue-500 focus:shadow-md' type="password" name="confir" placeholder='confirmar contraseña' id="confirmar" />
            <input className='my-3 p-2 w-[200px] bg-blue-900 rounded-xl' type="submit" value="Registarse" />
        </form>
            
            <p className='text-black'>¿Tienes cuenta? <a href="#" className='text-blue-800 cursor-pointer'>Inicia aqui</a></p>

        </div>

      </div>
    </div>

  )
}

export default registro
