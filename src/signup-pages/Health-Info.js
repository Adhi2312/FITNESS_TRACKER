import React from 'react'
import { useNavigate } from 'react-router-dom'

export const HealthInfo = () => {
    const nav=useNavigate();
  return (
    <div className='form'> 
    <h2>Health Info</h2>
    <div className='form-2'>
      
      <h4>Height in cm*</h4>
      <input placeholder='Enter your height in cm'/>
      <h4>Weight in lbs*</h4>
      <input placeholder='Enter your weight in lbs'/>
      <h4>Blood group*</h4>
      <input placeholder='Enter your Blood group'/>
     
      <button onClick={()=>{nav('/dashboard')}} >Submit</button>

    </div>

    
  </div>
  )
}
