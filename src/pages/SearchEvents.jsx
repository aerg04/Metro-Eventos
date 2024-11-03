import { useEffect, useState } from "react"
import EventCom from "../components/EventCom"

export default function SearchEvents({onClick, events, searchEventsByName, searchEventsByDate, searchEventsByLabel, labelsField}) {
    const [eventsShow, setEventsShow] = useState(events);

    useEffect(() => {
        setEventsShow(events);
    }, [events]);

    return(
        <>
        <div className="p-2 ">
            <div className="flex flex-row justify-center bg-gray-200 px-4 rounded-lg">
                <input type="text" placeholder="Nombre" className="p-2 m-2 w-1/2 rounded-lg" onChange={(e) => {
                    setEventsShow(searchEventsByName(e.target.value, events));
                }}/>
                <input type="date" className="p-2 m-2 rounded-lg" onChange={(e) => {
                    setEventsShow(searchEventsByDate(e.target.value, events));
                }}/>
                <select className="p-2 m-2 rounded-lg" onChange={(e) => {
                    setEventsShow(searchEventsByLabel(e.target.value, events));
                }}> 
                    <option value="">Selecciona una etiqueta</option>
                    {labelsField.map((label, index) => (
                        <option key={index} value={label}>{label}</option>
                    ))}
                </select>
            </div>
        </div>
        <div className="min-h-screen p-2 grid justify-evenly grid-cols-[repeat(auto-fill,minmax(256px,0fr))]">
            {eventsShow.map((event, index) => (
                <EventCom
                key={index}
                id={event.key}
                title={event.title}
                date={event.date}
                place={event.place}
                entryType={event.entryType}
                author={event.author}
                path={event.path}
                handleClick={onClick}
                />
            ))}        
        </div>
        </>
    )
}