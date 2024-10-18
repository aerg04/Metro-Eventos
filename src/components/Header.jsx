import logo from '../assets/MetroComedyLogo.png'
import { useState } from 'react';

export default function Header(){

    const [toggled, setToggled] = useState(false);

    const handleMenu = () => {
        toggled ? setToggled(false) : setToggled(true)
    }

    return(
        <header className='bg-creamhs top-0 w-full z-10 font-montserrat'>
            <nav className='flex items-center justify-between w-[92%] mx-auto'>
                <div className="flex">
                    <div className='p-2 flex shrink-0'>
                        <img className='h-14 w-12' src={logo}></img>
                    </div>

                    <div className='p-2 sm:w-64 flex items-center sm:justify-center'>
                        <h1 className='font-archivoBlack text-2xl text-black'>MetroEventos</h1>
                    </div>
                </div>

                <div className={toggled ? ' text-xl md:static absolute bg-blue-900 md:min-h-fit min-h-[30vh] left-0 top-[12%] md:w-auto w-full flex items-center px-5 ':'text-xl md:static absolute  md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 '}>
                    <ul className='text-black font-outfit flex md:flex-row flex-col md:items-center  md:gap-[4vw] gap-8'>
                        <li>
                            <a className='hover:text-gray-500' href=''>Comediantes</a>
                        </li>
                        <li>
                            <a className='hover:text-gray-500' href=''>Shows</a>
                        </li>
                        <li>
                            <a className='hover:text-gray-500' href=''>Contacto</a>
                        </li>
                    </ul>

                </div>

                <div className='flex items-center md:hidden cursor-pointer relative' >
                    {/* <img onClick={handleMenu} className='w-6' src={menulogo}></img> */}
                    <button onClick={handleMenu} className='flex flex-col justify-around w-6 h-6 focus:outline-none'>
                    <span className={`block w-full h-0.5 bg-white transform transition duration-300 ease-in-out rounded-lg ${toggled ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-full h-0.5 bg-white transform transition duration-300 ease-in-out rounded-lg ${toggled ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-full h-0.5 bg-white transform transition duration-300 ease-in-out rounded-lg ${toggled ? '-rotate-45 -translate-y-2' : ''}`}></span>
                

                    </button>
                </div>
            </nav>
        </header>
    );
}