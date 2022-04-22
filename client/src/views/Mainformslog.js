import React from 'react';
import Register from './Register';
import Login from './Login';
import Registerobject from '../components/Registerobject';

const Mainformslog = () => {
    return (
        <div className="formularios-registro">
            <Register/>
            <Login/>
            {/* <Registerobject/> */}
            
        </div>
    );
}

export default Mainformslog;
