import React from 'react'

function registro() {
  return (

    <div className='mx-auto justify-center items-center'>
      <div className='flex bg-gray-200 bg-transparent  rounded-3xl mx-10 shadow-xl'>
        
        <div className='imagen w-1/2 bg-slate-400 hidden md:block rounded-s-3xl'>
            <img src="./services/mp.jpg" alt="part" className=' bg-black h-full rounded-s-3xl'/>
        </div>

        <div className='registro md:w-1/2 w-full flex items-center flex-col p-5 mx-5'>

            <img src="./services/logo.png" alt="logo" className='h-[160px]' />

        <form action="" method="post" className='flex flex-col items-center'>
            <input className='my-2 p-2 w-[325px] rounded-xl text-black' type="text" placeholder='Nombre' />
            <input className='my-2 p-2 w-[325px] rounded-xl text-black' type="text" placeholder='Apellido' />
            <input className='my-2 p-2 w-[325px] rounded-xl text-black' type="email" name="correo" id="electronico" placeholder='email' />
            <input className='my-2 p-2 w-[325px] rounded-xl text-black' type="text" placeholder='telefono ' />
            <input className='my-2 p-2 w-[325px] text-black rounded-xl' type="password" name="contra" placeholder='contraseña' id="contarseña" />
            <input className='my-2 p-2 w-[325px] text-black rounded-xl' type="password" name="confir" placeholder='confirmar contraseña' id="confirmar" />
            <button className='my-2 p-2 w-[200px] bg-blue-900 rounded-xl' type="submit">Enviar</button>
        </form>
            
            <p className='text-black'>Si ya tienes cuenta inicia <a href="#" className='text-blue-800 cursor-pointer'>aqui</a></p>

        </div>

      </div>
    </div>

  )
}

export default registro
