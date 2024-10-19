import React, { useEffect, useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { Link } from 'react-router-dom';
import "../../styles/navbar/Navbar.css"
import NavbarMobile from './NavbarMobile';
import { BiHome } from 'react-icons/bi';
function Navbar() {
  const [menubar,setmenubar]=useState(false);
 
 

  const [activecolor,setactivecolor]=useState('Home')
  const handlemenubar=()=>{
    setmenubar(!menubar);
  }
  const handleclose=()=>{
    setmenubar(false);
  }
  const handleactive=(link)=>{
    setactivecolor(link);
  }
  return (
   <div className="navbar">
   
    <div className="menu" onClick={handlemenubar}>
   {menubar ?   <CiMenuFries /> : <CiMenuFries />}
    </div>
  
    <div className="logo">
     <Link to={"/"} onClick={handleclose} > <img src="/assestimage/NavbarImage/fullLogo.png" alt="" /></Link>
    </div>
    {menubar ? (<NavbarMobile  handleclose={handleclose} handleactive={handleactive} activecolor={activecolor} />):(
      <>
    <div className="links">
      <ul className='link' >
        <li><Link to="/" className={activecolor==='Home' ? 'nav-link active': 'nav-link'} onClick={()=>handleactive('Home')} >Home</Link></li>
        <li><Link to="/bookingform" className={activecolor==='Booking' ? 'nav-link active':'nav-link'} onClick={()=>handleactive('Booking')} >Booking Form</Link></li>
        <li><a href="" className={activecolor==='Amenities' ? 'nav-link active':'nav-link'} onClick={()=>handleactive('Booking')} >Amenities</a></li>
        <li><Link to="https://wa.me/03054370219" target='_blank' className='nav-link '  >Contact</Link></li>
      </ul>
    </div>
     </>
    )}
    <div className="button">
    <FaPhoneAlt />
      <p><Link to="https://wa.me/03054370219" >+92 315 6664 411   </Link>  </p>
    </div>
   
   </div>
  )
}

export default Navbar