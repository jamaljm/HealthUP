import React from 'react'
import "./Doccard.css"
import { CalendarToday, LocationOn } from "@material-ui/icons";


export default function Doccard() {
  return (
       <div className="foodCard">
           
            <div className="foodCardBottom">
                <div className="foodCardBottomLeft">

                    <img src="https://i.imgur.com/rDYXWLb.png" alt="" className="foodimage" />
                </div>
              <div className="foodCardBottomRight">
                  <div className='doccardinfos'>
                   <h2>Riya Sunil</h2>
                  <p>Cardiologist</p>
                  </div>
                 
                    <div className="foodInfo">
                        
                        <div className="foodInfoBottom">
                            <div className="foodInfoChild">
                                <span className="foodInfoKey">Experience : 4 Years </span>
                          </div>
                           <div className="foodInfoChild">
                                <LocationOn />
                                <span className="foodInfoKey">Mumbai </span>
                            </div>
                      </div>
                      <div className="foodInfoBottom">
                          <img src='https://i.imgur.com/QF9gztK.png'></img>


                        </div>
                   
                      <div className="foodinfobottombutton">
                          
                             <a href='https://zippy-twilight-ea5a4e.netlify.app/'><button className="foodinfobutton">₹250</button>
                    
                              <button className="foodinfobutton1">Consult Now</button> </a>                        

                    
                            
                    </div>
                        
                    </div>
                </div>
              


            </div>
              
        </div>
  )
}
