import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './views/Register';
import Login from './views/Login';
import { UserProvider } from "./contexts/userContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './views/Home';
import Mainformslog from './views/Mainformslog';
import Detail from './views/Detail';
import Registerobject from './components/Registerobject';
import Createpirate from './views/Createpirate';
import React, {useEffect, useState} from 'react';



function App() {
  const [userapp, setUserapp] = useState()
  return (
    <div className="App container">
      

      <UserProvider>
        <Router>
              {/* <Link to="/">Home</Link> */}
              {/* <Link to="/registro">logout</Link> */}
          <Routes>           
            <Route path="/registro" element={<Mainformslog/>} />
            <Route path="/" element={<Home  setUserapp={setUserapp}/>} />
            <Route path="/pirate/:id" element={<Detail user={userapp} />} />
            <Route path="/pirate/create" element={<Createpirate user={userapp} />} />
          </Routes>
        </Router>
      </UserProvider>


    </div>
  );
}

export default App;
