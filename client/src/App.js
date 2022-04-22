import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './views/Register';
import Login from './views/Login';
import { UserProvider } from "./contexts/userContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './views/Home';
import Mainformslog from './views/Mainformslog';

function App() {
  return (
    <div className="App">
      <h1>Agencia de Viajes</h1>

      <UserProvider>
        <Router>
              <Link to="/">Home</Link>
              {/* <Link to="/registro">logout</Link> */}
          <Routes>           
            <Route path="/registro" element={<Mainformslog/>} />
            <Route path="/" element={<Home></Home>} />
          </Routes>
        </Router>
      </UserProvider>


    </div>
  );
}

export default App;
