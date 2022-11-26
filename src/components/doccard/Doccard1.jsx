import React from 'react'
import "./Doccard.css"
import { CalendarToday, LocationOn } from "@material-ui/icons";


export default function Doccard() {
  return (
       <div className="foodCard">
           
            <div className="foodCardBottom">
                <div className="foodCardBottomLeft">

                    <img src="https://i.imgur.com/FQzWFaH.png" alt="" className="foodimage" />
                </div>
              <div className="foodCardBottomRight">
                  <div className='doccardinfos'>
                   <h2>Allen Reji</h2>
                  <p>physician</p>
                  </div>
                 
                    <div className="foodInfo">
                        
                        <div className="foodInfoBottom">
                            <div className="foodInfoChild">
                                <span className="foodInfoKey">Experience : 7 Years </span>
                          </div>
                           <div className="foodInfoChild">
                                <LocationOn />
                                <span className="foodInfoKey">Chennai </span>
                            </div>
                      </div>
                       <div className="foodInfoBottom">
                           <img src='https://i.imgur.com/wt4OwyU.png'></img>

                        </div>
                   
                      <div className="foodinfobottombutton">
                          <a href='http://localhost:3000/'><button className="foodinfobutton">₹200</button>
                    
                              <button className="foodinfobutton1">Consult Now</button> </a>
                         
                            
                    </div>
                        
                    </div>
                </div>
              


            </div>
              
        </div>
  )
}
