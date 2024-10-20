import EventCom from "../components/EventCom";
import evnts from "../assets/events.js";

export default function MyEvents() {
    return(
    <>
    <div className="min-h-screen p-4 grid justify-evenly grid-cols-[repeat(auto-fill,minmax(256px,0fr))]">
        {evnts.map((event, index) => (
            <EventCom
                key={index}
                title={event.title}
                date={event.date}
                place={event.place}
                entryType={event.entryType}
                author={event.author}
                path={event.path}
            />
        ))}        
    </div>
    </>
    )
}