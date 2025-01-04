import React from 'react'
import { useNavigate } from 'react-router-dom'

export const GeneralInfo = () => {
  const nav=useNavigate()
  return (
    <div className='form'> 
    <h2>General Info</h2>
    <div className='form-2'>
      
      <h4>Choose your Gender*</h4>
      <div style={{display:'flex'}}>
      <input style={{height:'20px',width:'20px'}} type='radio' name="gender"  />
      <label style={{marginLeft:"10px",marginTop:'0px',fontSize:'16px'}}>Male</label>
      <input style={{height:'20px',width:'20px', marginLeft:"50px"}} type='radio' name="gender"  />
      <label style={{marginLeft:"10px",fontSize:'16px'}}>Female</label>
      </div>
      <h4>Date Of Birth*</h4>
      <input type='datetime-local' placeholder='Enter your weight in lbs'/>
      <h4>Location*</h4>
      <input placeholder='Enter your Location'/>
     
      <button onClick={()=>{nav('/signup/health-info')}} >Continue</button>

    </div>

    
  </div>
  )
}
