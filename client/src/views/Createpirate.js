import React, {useState} from 'react';
import Registerobject from '../components/Registerobject';
import Navimage from './Navimage';
import axios from 'axios';

const Createpirate = (props) => {
    const {user} = props
    const [errors, setErrors] = useState([]); 
    const registerPirate = (values) => {
        axios.post('/api/pirate/create', values)
        .catch(err=>{
            console.log(err)
            console.log(err)
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        }) 
        
    }
    return (
        <div>
                <Navimage tittle= "Add a Pirate" flag1={false} flag2={true} user={user} />
                <Registerobject  className="col-6 " onSubmitProp={registerPirate}  pirateName="" image="" numberTreassures="" piratePhrase="" crewPosition="First Mate" pedLeg={false} eyePatch={false} hookHand={false} user={user}></Registerobject> 
                {errors.map((err, index) => <div  key = {index} className="alert alert-danger" role="alert">{err}</div>)}
        </div>
    );
}

export default Createpirate;
