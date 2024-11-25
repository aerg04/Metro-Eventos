import { Link} from "react-router-dom";


export default function Footer(){
  return (
      <>
      <div className='bg-custom-yellow w-full p-2 sm:p-2 md:p-4 lg:px-4 space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-0 text-xs sm:text-sm md:text-lg font-montserrat'>
        <div className='flex flex-row items-center justify-between '>

            <div className='flex  sm:space-x-2 md:space-x-3 lg:space-x-4 justify-center items-left' >
               <a href="https://www.unimet.edu.ve/" target="_blank" rel="noopener noreferrer">
                <img className='w-20 sm:w-[100px] md:w-[140px] lg:w-[180px] object-cover'  src="universidad.png" alt=""/>
               </a>
            </div>

          <div className='flex flex-col justify-center items-center xl:space-y-5'>
            <Link to="/feedback"  className="underline">Contacto</Link>

          </div>
        </div>
        <p className='w-full text-center m-0 p-0 leading-tight'>©2024 Metro Eventos. Todos los derechos reservados.</p>

      </div>
      </>
  );
}