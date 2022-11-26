import "./featuredInfo.css";
import { CalendarToday, LocationOn, MoreVert, EmergencyShare  } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { TbSquareDot } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Quiz from "../Quiz/Quiz";


export default function FeaturedInfo() {
  const token = window.localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  //     set search parameters
  //     we only what to search countries by capital and name
  //     this list can be longer if you want
  //     you can search countries even by their population
  // just add it to this array
  const [searchParam] = useState(["city", "city"]);


  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const navigate = useNavigate();

  
  function Logout() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("auth");
    navigate("/login");
  }
  return (
    <div className="featured">
      <Sidebar />
      <div className="featuredItem1">
        
  <div className="profilecard">
            <div className="sidebarprofiletop">
              <div className="sidebarprofiletop-left">

              <p>Profile
                </p>
              </div>
              <div className="sidebarprofiletop-right">
                <button><MoreVert /></button>


              </div>
            </div>
          <div className="sidebarprofile">
          
            
              
          <img
            src="https://i.imgur.com/yK9Gl2H.png"
            alt=""
            className="topAvatar2"
          />
            <p className="sidebarprofile-name">Jamal</p>
            <div className="sidebarprofileinfo_username">
            </div>
          <div className="sidebarprofileinfo">
            <div className="profileinfocard">
                <button onClick={Logout}>Logout{" "}</button>
            </div>
          </div>
        </div>
        </div>

          <div className="mallcard">
           <div className="sidebarprofiletop">
              <div className="sidebarprofiletop-left">

              <p>Emergency!
                </p>
              </div>
              
          </div>
          <div className="mallsmallcard">
            <div className="mycarimg">
            <img src="https://i.imgur.com/KcP8t7E.png">

            </img>
            </div>
    
            <div className="mycarinfo">
              <button><img src="https://i.imgur.com/IJn45M0.png"></img>Dial ambulance</button>
            
              <p>Location: Edappally</p>

            </div>
          </div>

          
        </div>
        
      </div>
      <div className="featuredItem2">
        <div className="zimagebg">
          <img src="https://cdn.dribbble.com/users/1233499/screenshots/16684883/media/51c8f1eb6e67f7502b9118d97ae161d2.png"></img>
          </div>
               <Quiz/>

      </div>
      <div className="featuredItem3">
             <div className="medicincarda">
     <div className="medicincard">
          <div className="medicincardrem">
            
            <div className="medicinimg">
              <img src="https://i.imgur.com/1YvsFBy.png"></img>
              <p>Medicine</p>
              
            </div>
            <div className="medreminderinfo">
              
              <p>8:30 AM</p>
            </div>
          </div>
          
           <div className="medicincardrem">
            
            <div className="medicinimg">
              <img src="https://i.imgur.com/8fWrXoS.png"></img>
              <p>Medicine</p>
              
            </div>
            <div className="medreminderinfo">
              
              <p>8:30 AM</p>
            </div>
          </div>
          
           <div className="medicincardrem">
            
            <div className="medicinimg">
              <img src="https://i.imgur.com/g3Hjylv.png"></img>
              <p>Medicine</p>
              
            </div>
            <div className="medreminderinfo">
              
              <p>8:30 AM</p>
            </div>
          </div>
          

                  </div>
              </div>

            
         
          

      </div>
    </div>
  );
}
