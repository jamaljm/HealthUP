import React from 'react';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Doctorcard from '../../components/doctorscard/Doctorcard';
import "./home.css";
import {
  Route,
  Routes,

} from "react-router-dom";


export default function home() {
  return (
    <div className='home'>
     <Doctorcard />
      
    </div>

  )
}
