import Login from "../pages/Login";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../models/user";
import PopUpMessage from "../components/PopUpMessage";

export default function LoginController(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (email, password) => {
        try {
            await login(email, password);
            navigate('/myevents');
        } catch (error) {
            setErrorMessage('Error. chequear credenciales');
            setShowError(true);
        }
    };
    return (<>
    <Login
    email={email}
    setEmail={setEmail}
    password={password}
    setPassword={setPassword}
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