import "bootstrap"
import Register from "./pages/register/Register.jsx";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Profile from "./pages/profile/Profile";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes.js";
import { useState } from "react";


 
const actions = [
  { label: "Add", value: 1 },
  { label: "Edit", value: 2 },
  { label: "Delete", value: 3 }
]; 

function App() {
  
  const [login, setLogin] = useState(false);
  return (
  //   

      <Router>
        <Link to="/"></Link>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route exact path="/Home" element={<Home />} /> 
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Register" element={<Register />} />
          </Route>
          <Route path="/" element={<Login setLogin={setLogin} />} />
        </Routes>
      </Router>
   

  );
}

export default App;
