import React from 'react'
import "../../styles/banner1/Banner1.css"
function Banner1() {
  return (
    <div className="banner1"> 
    <div className="bannerimage">
      <img className='largeimage' src="/assestimage/Banner1Image/main-bg.png" alt="" />
      <img className='smallimage' src="/assestimage/Banner1Image/main-mob-bg.png" alt="" />
    </div>
     <div className="bannerbody">
      <h1>Luxury Redefined in swiss haven <span> Farmhouses </span> </h1>
      <p>Experience unparalleled luxury in Farmhouses. Immerse yourself in sophistication, surrounded by nature's beauty. Your dream home awaits at Swiss Haven  Farmhouses 
     <br /> by <span> Al-Nafey Group</span>.</p>
     </div>
    </div>
  )
}

export default Banner1