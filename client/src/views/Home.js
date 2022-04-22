import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useUser } from "../contexts/userContext";
import logout from '../accions/logout';

const Home = () => {
    const navigate = useNavigate();
    const { user, setUser } = useUser();

    const logOut = async () => {
        const { success } = await logout();
        if (success) setUser(null);
        else window.alert("Error, could not log out");
        navigate("/registro");
      };
    useEffect(() => {    
        if(!user){
            navigate("/registro");
            
        }
        else{
            console.log("ando logueado")
        }
    },[]);
    return (
        <div>
            <Link to="/registro" onClick={logOut}>Logout</Link>
        </div>
    );
}

export default Home;
