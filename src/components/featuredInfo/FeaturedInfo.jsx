import "./featuredInfo.css";
import { CalendarToday, LocationOn, MoreVert } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { TbSquareDot } from "react-icons/tb";
import { useNavigate } from "react-router-dom";






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
      <div className="featuredItem1">

      </div>
      <div className="featuredItem2">
       
      </div>
      <div className="featuredItem3">
         

      </div>
    </div>
  );
}
