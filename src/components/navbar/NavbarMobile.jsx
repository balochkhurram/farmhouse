import React, { useState } from 'react'
import "../../styles/navbar/NavbarMobile.css"
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

function NavbarMobile({handleclose,handleactive, activecolor}) {
  
  return (
   <div className="nav">
   
    
    <div className="mobile-nav">
   
      <ul className='mobilenav open'>
      <div className="cross" onClick={handleclose} >
     <ImCross />
     </div>
        <li><Link to="/" className={activecolor==='Home' ? 'nav-link active':'nav-link'}   onClick={()=>{handleclose(); handleactive('Home');}}   >Home</Link></li>
        <li><Link to="/bookingform" className={activecolor==='Booking' ? 'nav-link active':'nav-link'}   onClick={()=>{handleclose(); handleactive('Booking');}}  >Booking Form</Link></li>
        <li><a href="" className={activecolor==='Amenities' ? 'nav-link active':'nav-link'}   onClick={()=>{handleclose(); handleactive('Amenities');}}  >Amenities</a></li>
        <li><a href="" className= 'nav-link  '    >Contact</a></li>
      </ul>
    </div>
   </div>
  )
}

export default NavbarMobile