import logo from './logo.svg';
import './App.css';
import  DB from './screens/DB'
import { Routes,Route } from 'react-router-dom';
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
      
    </div>
    
  )
}
export default App;
