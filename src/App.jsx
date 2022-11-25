
import Navbar from "./components/topbar/topbar";
import Sidebar from "./components/sidebar/Sidebar";
import VolunteerForm from "./components/VolunteerForm";
import Login from "./components/Login";
import SignupPage from "./components/Signin";
import Home from "./pages/home/Home";
import React from "react";
import "./app.css";
import Doctorcard from "./components/doctorscard/Doctorcard";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";


function App() {
  
  const [auth, setAuth] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );

  const navigate = useNavigate();




  return (
    <>
      <div className="App">
     
        <div className="container">
          {auth && <Sidebar />}
          <Routes>
            {/* <Route path="/*" element={<Landingpage />} /> */}
            {<Route path="/home" element={<Home />} />}
            { <Route  path="/doctorcard" element={<Doctorcard />} />}
            {!auth ? (
              <Route exact path="/" element={<SignupPage />} />
            ) : (
              <Route exact path="/" element={<Home />} />
            )}

            {}
            {!auth && <Route  path="/login" element={<Login />} />}
            
          </Routes>
        </div>
      </div>
    </>

  );
}
export default App;


