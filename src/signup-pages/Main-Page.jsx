import React from 'react'
import './signup.css'
import { MdOutlineCircle } from "react-icons/md";
import { CgShapeCircle } from "react-icons/cg";
import { FaRegCircleCheck } from "react-icons/fa6";
import { PersonalInfo } from './personal-info';
import { Routes,Route } from 'react-router-dom';
import { HealthInfo } from './Health-Info';
import { GeneralInfo } from './General-Info';
import { Password } from './Password';
import { Verification } from './Verification';
export const FirstPage = () => {
  return (
    <div className='signup-css'>
        <div className='con-1'>
            <div className='con-1-1'>
                <div style={{ display:'flex'}}>
                <CgShapeCircle size={40} color='blue' />
                <h2 style={{margin:'2px 0px 0px 5px'}}>Signup</h2>
                </div>
                <div className='con-1-2'>
                    <div className='con-sub'>
                    <FaRegCircleCheck size={24} />
                    <h3>Personal Info</h3>
                      

                    </div>
                    <div className='con-sub'>
                    <FaRegCircleCheck size={24} />
                    <h3>Account Verification</h3>
                      

                    </div>
                    <div className='con-sub'>
                    <FaRegCircleCheck size={24} />
                    <h3>Choose a password</h3>
                      

                    </div>
                    <div className='con-sub'>
                    <FaRegCircleCheck size={24} />
                    <h3>General Info</h3>
                      

                    </div>
                    <div className='con-sub'>
                    <FaRegCircleCheck size={24} />
                    <h3>Health Info</h3>
                      

                    </div>
                    
                    
                </div>

            </div>
            
        </div>
        <div className='con-2'>
          <Routes>
            <Route path='personal' element={<PersonalInfo/>}/>
            <Route path='health-info' element={<HealthInfo/>}/>
            <Route path='verify' element={<Verification/>}/>
            <Route path='create-password' element={<Password/>}/>
            <Route path='general-info' element={<GeneralInfo/>}/>
          </Routes>
          
          {/* <PersonalInfo/> */}
       
        </div>
        
        
        
    </div>
  )
}

