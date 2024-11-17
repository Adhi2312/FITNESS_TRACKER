import React from 'react'
import './food.css'
import idli from '../imges/idli_premix_featured.jpg'
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

export const Food = () => {
  return (
    <div style={{display:"flex",height:"100vh",width:"100vw",justifyContent:"center"}}>
      <div className='food-sub'>
        <div style={{display:"flex"}}>
          <input className='in' placeholder='Type Something,...'/>
          <CiSearch size={30} className='search'/>
          
        </div>
        <div className='food-sub-2'>
          <div className='food-card'>
                <img  style={{width:"300px",height:"200px",borderRadius:"20px 20px 0px 0px"}}src={idli}/>
                <div style={{padding:"10px"}}>
                    
                    <div style={{display:'flex'}}>
                      <div>
                      <p style={{margin:"0px",fontSize:"20px"}}>Idly</p>
                      <p style={{margin:"5px 0px 5px 0px",fontSize:"15px",color:"grey"}}>300 calories</p>
                     
                      </div>
                      < IoIosAddCircleOutline style={{marginLeft:"auto"}} color='grey' size={40}/>

                    </div>
                </div>
                
                
          </div>

        </div>

      </div>

    
    
    </div>
  )
}
