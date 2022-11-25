import React from 'react'
import "./Doccard.css"
import { CalendarToday, LocationOn } from "@material-ui/icons";


export default function Doccard() {
  return (
       <div className="foodCard">
           
            <div className="foodCardBottom">
                <div className="foodCardBottomLeft">

                    <img src="https://i.imgur.com/j0vf0EO.png" alt="" className="foodimage" />
                </div>
              <div className="foodCardBottomRight">
                  <div className='doccardinfos'>
                   <h2>Tony Fernandez</h2>
                  <p>Gastroenterologists</p>
                  </div>
                 
                    <div className="foodInfo">
                        
                        <div className="foodInfoBottom">
                            <div className="foodInfoChild">
                                <span className="foodInfoKey">Experience : 5 Years </span>
                          </div>
                           <div className="foodInfoChild">
                                <LocationOn />
                                <span className="foodInfoKey">Kochi </span>
                            </div>
                      </div>
                       <div className="foodInfoBottom">
                           <img src='https://i.imgur.com/e2VNmAY.png'></img>

                        </div>
                   
                        <div className="foodinfobottombutton">
                          <button className="foodinfobutton">₹150</button>
                    
                              <button className="foodinfobutton1">Book NOw</button>
                              
                            
                    </div>
                        
                    </div>
                </div>
              


            </div>
              
        </div>
  )
}
