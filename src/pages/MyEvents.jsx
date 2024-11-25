import EventCom from "../components/EventCom";
import { Link } from 'react-router-dom';

export default function MyEvents({onClick,loading ,events}) {
    return(
    <>
    <div className="pt-4 px-10 gap-y-2">
    <div className="flex flex-col items-center justify-center">
        <Link to="/createevent" className="w-1/2 py-2 bg-orange-500 text-white text-center rounded-md shadow-sm hover:bg-orange-600 m">
                    Crear evento
        </Link>
    </div>
    <h1 className="font-bold text-2xl">Mis eventos</h1>
    </div>
    <div className="min-h-screen p-2 grid justify-evenly grid-cols-[repeat(auto-fill,minmax(256px,1fr))] lg:grid-cols-4">
            {loading ? (
                    <div className="main-container">
                        <div className="content">
                            <p className="text-2xl font-semibold text-center mt-12 mb-120">Cargando eventos...</p>
                        </div>
                    </div>
            ) : events.length > 0 ? (
                events.map((event, index) => (
                    <EventCom
                    key={index}
                    id={event.id}
                    title={event.title}
                    date={event.date}
                    place={event.place}
                    entryType={event.entryType}
                    author={event.author}
                    path={event.path}
                    handleClick={onClick}
                    showBookmark={false}
                    />
                ))
            ) : (
               <div className="main-container">
                  <div className="content ">
                  <p className="text-2xl font-semibold text-center mt-12 mb-120">No hay eventos</p>
                  </div>
                  </div>
            )} 
    </div>
    </>
    )
}