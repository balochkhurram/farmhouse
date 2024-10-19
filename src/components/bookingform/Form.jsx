import React, { useState } from 'react'
import "../../styles/bookingfrom/Form.css"
function Form() {
  const [activebox,setactivebox]=useState('');
  const handleactive=(active)=>{
   setactivebox(active);
  }
  return (
    <div className="background">  
      <div className="sectionbanner6">
        <div className="formbanner">
          <div className="leftbanner">
            <h1>Plot Prefference</h1>
          <div className="forminputs">         
             <div className="forminput">
            
             <div className={activebox==='normal' ? 'checkbox activeChecked':'checkbox'} onClick={()=>handleactive('normal')}  ></div>
              <p>Normal (No Extra Charges)</p> 
          </div>
          <div className="forminput">
          <div className={activebox==='extra' ? 'checkbox activeChecked':'checkbox'} onClick={()=>handleactive('extra')} ></div>
            <p>40 Feet Road (5% Extra Charges)</p>
          </div>
          <div className="forminput">
           
            <div className={activebox==='facingparkcorner' ? 'checkbox activeChecked':'checkbox'} onClick={()=>handleactive('facingparkcorner')} ></div>
            
              <p>Facing Park/Corner (10% Extra Charges)</p>
          </div>
          <div className="forminput">
          <div className={activebox==='bothfacingparkcorner' ? 'checkbox activeChecked':'checkbox'} onClick={()=>handleactive('bothfacingparkcorner')}></div>
            
            <p>Both Facing Park/Corner (15% Extra Charges)</p>
          </div>
          <div className="forminput">
           
            <div className={activebox==='15%' ? 'checkbox activeChecked':'checkbox'} onClick={()=>handleactive('15%')}></div>
              
              <p>Both Facing Park/Corner (15% Extra Charges)</p>
        
          </div>
          <div className="forminput">
          <div className={activebox==='15%extracharges' ? 'checkbox activeChecked':'checkbox'} onClick={()=>handleactive('15%extracharges')}></div>
              
              <p>80, 100 Feet Road (15% Extra Charges)</p>
          </div>
         
          
        </div>
        </div>
        <div className="rightbanner">
          
          <h1>Application Detail</h1>
          
         <div className="formsinput">
         <div className="plotsize">
            <label htmlFor="">plot size</label>
            <select name="plot size" id="">
              <option value="">2 kanal</option>
              <option value="">4 kanal</option>
            </select>
             
            </div>
            <div className="inputsform">
              <input type="text" name="" id="" placeholder='Your name' />
              <input type="text" name="" id="" placeholder='your father/husband name' />
            </div>
            <div className="inputsform">
            
            <input type="text" name="" id="" placeholder='postal address' />
          </div>
        
            <div className="inputsform">
              <input type="number" name="" id="" placeholder='mobile number' />
              <input type="number" name="" id="" placeholder='mobile number 2' />
            </div>
         
         
            <div className="inputsform">
              <input type="email" name="" id="" placeholder='email address' />
              <input type="text" name="" id="" placeholder='occupation' />
            </div>
            <div className="inputsform">
              <input type="text" name="" id="" placeholder='nationality' />
              <input type="text" name="" id="" placeholder='date of birth (2/3/2024)' />
            </div>
            <div className="inputsform">
              <input type="number" name="" id="" placeholder='CNIC/NCOP' />
              <input type="text" name="" id="" placeholder='Cast' />
            </div>
            <div className="inputsform">
              <input type="text" name="" id="" placeholder='Name (Nominee)' />
              <input type="text" name="" id="" placeholder='Relation' />
            </div>
            <div className="inputsform">
              <input type="number" name="" id="" placeholder=' Mobile 1 (Nominee)' />
              <input type="number" name="" id="" placeholder='Mobile 2 (Nominee)' />
            </div>
            <div className="inputsform">
            
              <input type="number" name="" id="" placeholder='Nominee CNIC/NCOP' />
            </div>
          
          <div className="inputsform">
         <label htmlFor="" for="Nominee-pic" >Nominee pic</label>
         <input type="file" name="" id="Nominee-pic" accept='image/*' placeholder='Owner pic' style={{appearance:'none',display:'none',cursor:'pointer'}}  />
          </div>
          <div className="inputsform">
         <label htmlFor="" for="owner-pic" >Owner Pic</label>
         <input type="file" name="" id="owner-pic" accept='image/*' placeholder='Owner pic' style={{appearance:'none',display:'none',cursor:'pointer'}}  />
          </div>
          
            </div>
            <div className="submitbtn">
            <button>Submit</button>
          </div>
        </div>
      </div>
      </div>

    </div>

  )
}

export default Form