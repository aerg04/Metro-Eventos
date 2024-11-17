import { useEffect, useState } from "react"
import EventCom from "../components/EventCom"

export default function SearchEvents({onClick, events, matchAllEvents, labelsField}) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [label, setLabel] = useState("");

    useEffect(() => {
        matchAllEvents(name, date, label);
    }, [name, date, label]);

    return(
        <>
        <div className="p-2 ">
            <div className="flex flex-row justify-center bg-gray-200 px-4 rounded-lg">
                <input type="text" placeholder="Nombre" className="p-2 m-2 w-1/2 rounded-lg" onChange={(e) => {
                    setName(e.target.value);
                }}/>
                <input type="date" className="p-2 m-2 rounded-lg" onChange={(e) => {
                    setDate(e.target.value);
                }}/>
                <select className="p-2 m-2 rounded-lg" onChange={(e) => {
                    setLabel(e.target.value);
                }}> 
                    <option value="">Selecciona una etiqueta</option>
                    {labelsField.map((label, index) => (
                        <option key={index} value={label}>{label}</option>
                    ))}
                </select>
            </div>
        </div>
        <div className="min-h-screen p-2 grid justify-evenly grid-cols-[repeat(auto-fill,minmax(256px,1fr))] lg:grid-cols-4">
            {events.length > 0 ? (
                events.map((event, index) => (
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
                ))
            ) : (
                <p>No hay eventos</p>
            )}
        </div>
        </>
    )
}