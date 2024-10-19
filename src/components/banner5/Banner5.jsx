import React from 'react'
import "../../styles/banner5/Banner5.css"
function Banner5() {
  return (
    <div className="sectionbanner5">
    <div className="banner5">
     
        <div className="textbanner">
          <h1>Sustainable Solutions for Modern Living <br /> at <span> Swiss Haven Farmhouses </span></h1>
          <div className="lines">
            <div className="oneline"></div>
            <div className="twoline"></div>
            <div className="twoline"></div>
            <div className="twoline"></div>
          </div>

        </div>
        <div className="cards">
          <div className="card">
           <div className="imagebanner">
            <img src="/assestimage/banner5image/outdoor.jpg" alt="" />
            <h2>Playgrounds & Parks</h2>
           </div>
           <div className="cardbody">
            <p>Parks and playgrounds will be established in Oasis Farms Islamabad to allow you to enjoy games and spend quality time with your family.</p>
            <div className="lines">
              <div className="oneline"></div>
              <div className="twoline"></div>
              <div className="twoline"></div>
              <div className="twoline"></div>
            </div>
           </div>
          </div>
          <div className="card">
           <div className="imagebanner">
            <img src="/assestimage/banner5image/play.jpg" alt="" />
            <h2>Outdoor Gym</h2>
           </div>
           <div className="cardbody">
            <p>An outdoor gym will be developed in the society, featuring the latest equipment and trainers to help residents maintain their healthy lifestyles.</p>
            <div className="lines">
              <div className="oneline"></div>
              <div className="twoline"></div>
              <div className="twoline"></div>
              <div className="twoline"></div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Banner5