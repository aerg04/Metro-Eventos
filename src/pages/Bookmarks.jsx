import EventCom from "../components/EventCom";
import { Link } from 'react-router-dom';

export default function Bookmarks({onClick,loading ,events}) {
    return (
        <>
    <div className="pt-4 px-10 gap-y-2">
    
    <h1 className="font-bold text-2xl">Mis guardados</h1>
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