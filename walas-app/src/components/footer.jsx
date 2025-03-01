import React from 'react'

function footer() {
    return (
        <div className='footer '>
            <div className='rounded-t-2xl shadow-sm max-w-screen flex flex-wrap mx-auto dark:bg-green-900 items-center justify-between p-[25px]'>

                <div className='items-center text-center justify-center ml-5'>
                    <h6>© 2024 Walas Company. Todos los derechos reservados.</h6>
                </div>

                <div>
                    <ul className="redes flex p-1 items-center justify-center">
                        <li className='m-5'><a href=""><img src="./facebook.png" className='h-[60px]' alt="Pet cap center Logo" /></a></li>
                        <li className='m-5'><a href=""></a><img src="./instagram.png" className='h-[63px]' alt="Pet cap center Logo" /></li>
                        <li className='m-5'><a href=""></a><img src="./twitter.png" className='h-[60px]' alt="Pet cap center Logo" /></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default footer
