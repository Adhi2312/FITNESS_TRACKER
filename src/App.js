import logo from './logo.svg';
import './App.css';
import DB from './screens/DB'
import {Food} from './screens/food'
import { Routes,Route, useNavigate} from 'react-router-dom';
import { FaHome, FaUser, FaUtensils } from 'react-icons/fa';
import { useState } from 'react-router-dom';
import ProfileForm from './screens/ProfileForm';
import {Signup, GDLB} from './screens/signup';
function App() {

  return (





  
    <div className='main'>
        
   
        
        <div className='sub-main'>
          <Routes>
            <Route path="/" element={<DB/> } />
            <Route path="/plate" element={<Food/>}/>
            <Route path="/check" element={<ProfileForm />} />
            <Route path='/signup' element={<GDLB/>}/>
          </Routes>
        </div>
                 <NavBar/>
        
   </div>
  );
}

export const NavBar=()=>{
  const nav=useNavigate();
  return (
    <div className='nav'>
      <button className='nav-button' onClick={()=>{nav('/')}}>
           <FaHome size={24}/>
      </button>
      <button className='nav-button' onClick={()=>{nav('/plate')}}>
        <FaUtensils size={24}/>
      </button>
      <button className='nav-button' onClick={()=>{nav('/check')}}>
        <FaUser size={24}/>
      </button>
    </div>
    
  )
}
export default App;
