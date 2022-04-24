import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"
import '../App.css';
import Navimage from "./Navimage";

const Detail = (props) => {
    const navigate = useNavigate();
    const {user} = props
    const {id} = useParams();
       const [pirate, setPirate] = useState({})
       const [pedLeg, setpedLeg] = useState();
       const [eyePatch, seteyePatch] = useState()
       const [hookHand, sethookHand] = useState()
    useEffect(() => {  
         if(!user){
             navigate("/registro");
         }
         else{
             console.log("ando logueado")
         }    
        axios.get("/api/pirate/" + id)
            .then((res)=>{
                 
                 setPirate(res.data.api);
                 setpedLeg(res.data.api.pedLeg);
                 seteyePatch(res.data.api.eyePatch);
                 sethookHand(res.data.api.hookHand);

                
            })
    }, [])
    const changeSkill = (skillNumber) => {
        axios.post('/api/pirate/changeSkill/'+ skillNumber + "/"+ id)
        .then(res=>{
            
            if(skillNumber === 1){
               
                const original = pedLeg;
                setpedLeg(!original);
            }
            if(skillNumber === 2){
                const original = eyePatch;
                seteyePatch(!original);
            }
            if(skillNumber === 3){
                const original = hookHand;
                sethookHand(!original);
            }

        }).catch((err)=>{
            
        })
    }
    return (

        <div className="detail">
            <Navimage tittle= {pirate.pirateName}  flag1={false} flag2={true} user={user}/>     

            <div    className="row"    >
                <div       className="col-6 align-self-center justify-content-center" >
                    <img src={pirate.image} alt="MDN" ></img>
                </div>
                <div className="col-6 " >
                    <h3>About</h3>
                    <p class="col align-self-center" >Cargo: {pirate.crewPosition}</p>
                    <p class="col align-self-center"  >Direccion: {pirate.numberTreassures}</p>
                    <div className="row " >
                        <p  className="col-8"  >Ped Leg: {pedLeg?"NO":"SI"} </p> 
                        <button className={`col-2 button1-color${pedLeg}`} onClick={()=>changeSkill(1)}>{pedLeg?"NO":"SI"}</button>
                    </div>
                    <div className="row" >
                        <p className="col-8" >HEye Patch: {eyePatch?"NO":"SI"} </p> 
                        <button className={`col-2 button2-color${eyePatch}`} onClick={()=>changeSkill(2)}>{eyePatch?"NO":"SI"}</button>
                    </div>
                    <div className="row" >
                        <p className="col-8" >hook Hand: {hookHand?"NO":"SI"} </p> 
                        <button className={`col-2 button3-color${hookHand}`} onClick={()=>changeSkill(3)}>{hookHand?"NO":"SI"}</button> 
                    </div>
                </div>



            </div>
        </div>
    );
}

export default Detail;
