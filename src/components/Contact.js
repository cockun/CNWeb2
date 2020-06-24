import React from 'react'
import Header from './Header.js'
import banner from '../image/hero-3.jpg'
import '../css/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarked , faPhone , faMailBulk } from '@fortawesome/free-solid-svg-icons'
function Contact(){
    return(
        <div >
          
            <div className="ContactCont">
                <img src={banner} className="ContactBanner" alt=""/>
                <div className="ContactUs">
                    <div className="ContWWidth">
                        <p className="ContactTitle">Contact Us</p>
                        
                        <div className="subContactTitle">
                        Contrary to popular belief, Lorem Ipsum is 
                        simply random text. It has roots in a piece 
                        of classical Latin literature from 45 BC, maki years old   
                        </div>
                        <div className="contactOption">
                            <div className="OptionCT">
                                <div className="iconCT">
                                    <FontAwesomeIcon icon={faMapMarked} />
                                </div>
                                <div className="CTWay">
                                    <p className="CTWayTitle">Address:</p>
                                    <p className="CTWayContent">60-49 Road 11378 New York</p>
                                </div>
                            </div>
                            <div className="OptionCT">
                                <div className="iconCT">
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div className="CTWay">
                                    <p className="CTWayTitle">Address:</p>
                                    <p className="CTWayContent">60-49 Road 11378 New York</p>
                                </div>
                            </div>
                            <div className="OptionCT">
                                <div className="iconCT">
                                    <FontAwesomeIcon icon={faMailBulk} />
                                </div>
                                <div className="CTWay">
                                    <p className="CTWayTitle">Address:</p>
                                    <p className="CTWayContent">60-49 Road 11378 New York</p>
                                </div>
                            </div>
                        </div>
  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact