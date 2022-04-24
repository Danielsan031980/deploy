import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom"
import { useUser } from "../contexts/userContext";
import logout from '../accions/logout';
import Piratelist from './PirateList';
import Navimage from './Navimage';

const Home = (props) => {
    const navigate = useNavigate();
    const { user, setUser } = useUser();
    const logOut = async () => {
        
        const { success } = await logout();
        if (success) setUser(null);
        else window.alert("Error, could not log out");
        navigate("/registro");
      };

      const addPirate = (id) => {
        navigate("/pirate/create")
    }

    useEffect(() => {    
        if(!user){
            navigate("/registro");
        }
        else{
         
            props.setUserapp(user)
        }
    },[]);
    return (
        
        <div>
            <Navimage tittle= "Welcome to Pirate Crew"  onPropsSubmit={addPirate} flag1={true} flag2={false} logout={logOut} user={user} />
            <Link className="col-3 " to="/registro" onClick={() => logOut()}>Logout</Link>
            <Piratelist user={user}/>
            
        </div>
    );
}

export default Home;
