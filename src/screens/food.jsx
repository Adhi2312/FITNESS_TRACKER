import React, { useState } from 'react'
import './food.css'
import idli from '../imges/idli_premix_featured.jpg'
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

import { RxCross1 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

export const Food = () => {
  const [card,SetCard] =useState(false);
  return (
    <div>
       
       {(card==false)?<card/>:<Card SetCard={SetCard}/>}
      
      
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
                      < IoIosAddCircleOutline style={{marginLeft:"auto"}} color='grey' size={40} onClick={()=>{SetCard(true)}}/>

                    </div>
                </div>
                
                
          </div>

        </div>

      </div>

    
    
    </div>
    </div>
  )
}
export const Card=({SetCard})=>
{
  const nav=useNavigate();
  

  const handle=async()=>{
    console.log("meal")
    const body={
    
      dish_name:"soup",
          calorie:45,
          
         protein:1.7,
          fat:0.3,
          carbs:9
  
    }
    try{const res=await fetch('http://localhost:4000/meal',{
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json',
          },
        body:JSON.stringify(body)}
        );
        console.log(res.status);
      if (res.status==200)nav('/dashboard')}
      
        catch(error){console.log(error)}
  }
  const[count,setCount]=useState(0);
  return(

   
   <div className='food-card2'>
    <div style={{display:'flex',justifyContent:'flex-end',width:"100%",backgroundColor:"white",padding:"7px 0px"}}>
      {/* <h1>good</h1> */}
      <RxCross1 style={{marginRight:'10px'}} size={20} onClick={()=>{SetCard(false)}} />
      {/* <p style={{margin:"0px"}}>hai</p> */}
      
    </div>
    <div style={{width:"100%",display:"flex",height:"100%",backgroundColor:"white"}}>
      <div  className="ccc" style={{display:'flex',flexDirection:'column',width:"50%"}}>
      <h3>Dish Name</h3>
      <p>Protein</p>
        <p>Carbs</p>
        <p>Fats</p>
        <p>Calorie</p>
        <p>Qty</p>
        <button style={{maxWidth:"100px",padding:'10px 30px',margin:"10px",borderRadius:"10px",border:'0px'}}>Cancel</button>
      </div>
      <div className='ccc' style={{width:'50%',display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
        <h3>Idly</h3>
        <p>100 g</p>
        <p>100 g</p>
        <p>100 g</p>
        <p>100 g</p>
        <div className='add-b'>
          <button style={{}} onClick={()=>{(count<=0)?setCount(0):setCount(count-1)}}><FiMinus size={7} /></button>
          <p>{count}</p>
          <button onClick={()=>{setCount(count+1)}}><FaPlus size={7} /></button>

        </div>
        <button onClick={handle} style={{minWidth:"100px",padding:'10px 30px',margin:"10px",borderRadius:"10px",border:'0px'}}>Add</button>
        

      </div>
     
      
    </div>
    <div style={{width:"100%",display:"flex",justifyContent:"flex-end"}}>
        
      </div>
    
   </div>
  )
}
