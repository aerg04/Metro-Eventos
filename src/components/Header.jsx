import logo from '../assets/MetroComedyLogo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header({toggleSidebar, toggled,showSidebar}){
    return(
        <header className='bg-creamhs top-0 w-full z-10 flex font-montserrat'>
                { showSidebar && (
                    <div className={`flex items-center px-4 cursor-pointer relative `} >
                    <button onClick={toggleSidebar} className={`flex flex-col justify-around w-6 h-6 focus:outline-none `}>
                    <span className={`block w-full h-0.5 bg-black transform transition duration-300 ease-in-out rounded-lg ${toggled ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-full h-0.5 bg-black transform transition duration-300 ease-in-out rounded-lg ${toggled ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-full h-0.5 bg-black transform transition duration-300 ease-in-out rounded-lg ${toggled ? '-rotate-45 -translate-y-2' : ''}`}></span>
                

                    </button>
                    {/* <img onClick={handleMenu} className='w-6' src={menulogo}></img> */}
                </div>)}
                <div className="flex flex-grow  justify-center items-center">

                       <Link to="/events" className="p-2">
                             <img className='h-14 w-12' src={logo}></img>
                       </Link>


                    <Link to="/events" className="p-2 sm:w-64 items-center sm:justify-center">
                        <h1 className='font-archivoBlack text-2xl text-black'>MetroEventos</h1>
                    </Link>
                    </div>

        </header>
    );
}