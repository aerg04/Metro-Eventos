import Login from "../pages/Login";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../models/user";
import PopUpMessage from "../components/PopUpMessage";

export default function LoginController(){

    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    async function handleLogin(email, password){
        try {
            await login(email, password);
            navigate('/myevents');
        } catch (error) {
            setErrorMessage('Error. chequear credenciales');
            setShowError(true);
        }
    };
    function handleCloseError() {
        setShowError(false);

    }
    return (<>
    <Login
        funcAutentication={handleLogin}
    />
        {showError && (
            <PopUpMessage
            message={errorMessage}
            onClose={handleCloseError}
            messageOnClose={"Cerrar"}
            />
        )}
    </>
    )
}