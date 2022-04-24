import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom"

const Navimage = (props) => {
    const {onPropsSubmit, tittle, flag1, flag2, logOut, user} = props
    const navigate = useNavigate();
    console.log(user)
    useEffect(() => {  
        if(!user){
            navigate("/registro");
        }
        else{
            
        }     
        
    },[]);

    return (
        <div className="row navegation-tittle align-items-center">
            <h1 className="col-9 classh1" >{tittle}</h1>
            {flag1 && <button className="col-2 button_color" onClick={() => onPropsSubmit()}>Add a Pirate</button>}  
            {flag2 && <button className="col-2 button_color" onClick={() => navigate("/")}>Crew Board</button> } 

        </div>
    );
}

export default Navimage;
