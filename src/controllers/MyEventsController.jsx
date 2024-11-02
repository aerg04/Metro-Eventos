import MyEvents from "../pages/MyEvents"
import evnts from "../assets/events.js";
import { useNavigate } from "react-router-dom";

export default function MyEventsController() {
    const navigate = useNavigate();

    function handleClick(id){
        navigate(`/event/${id}`);
    };
    return <MyEvents onClick={handleClick} events={evnts} />
}