import logo from './logo.svg';
import './App.css';
import  DB from './screens/DB'
import { Routes,Route } from 'react-router-dom';
import { FaHome, FaUser, FaUtensils } from 'react-icons/fa';
function App() {
  return (
    <div className='main'>
        
   
        
        <div className='sub-main'>
          <Routes>
            <Route path="/" element={<DB/>} />
          </Routes>
        </div>
       
          <NavBar/>
        
   </div>
  );
}

export const NavBar=()=>{
  return (
    <div className='nav'>
      <button className='nav-button' >
           <FaHome size={24}/>
      </button>
      <button className='nav-button'>
        <FaUtensils size={24}/>
      </button>
      <button className='nav-button'>
        <FaUser size={24}/>
      </button>
    </div>
    
  )
}
export default App;
