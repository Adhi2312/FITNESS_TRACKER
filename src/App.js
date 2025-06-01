import logo from './logo.svg';
import './App.css';
import DB from './screens/DB'
import {Food} from './screens/food'
import { Routes,Route, useNavigate, Navigate} from 'react-router-dom';
import { FaHome, FaUser, FaUtensils } from 'react-icons/fa';
// import { useState } from 'react-router-dom';
import { useEffect,useState } from 'react';
import ProfileForm from './screens/ProfileForm';
import {Signup, GDLB} from './screens/signup';
import { FirstPage } from './signup-pages/Main-Page';
import { useQuery } from "@tanstack/react-query";
// import { useNavigate } from 'react-router-dom';

function App() {
  // console.log('well');
  const [data, setData] = useState();

  const { data: data1, refetch } = useQuery({
    queryKey: ["meals"],
    queryFn: () => {
      console.log("🔁 Fetching user-data...");
      return fetch("http://localhost:4000/user-data", {
        credentials: "include",
      }).then((res) => res.json()); // already JSON here
    },
    refetchInterval: 1000*60*5, // every second
  });
  
  useEffect(() => {
    if (data1) {
      setData(data1); // ✅ correct
      console.log("✅ Got user data:", data1.Calorie); // log fresh data
    }
  }, [data1]);
  

  return ( 
    <div className='main'>
                
        <div className='sub-main'>
          <Routes>
            {/* <Route path='/' element={Navigate to="/signup" />}/> */}
            {/* <Route path="/" element={<Navigate to="/signup/personal" />} /> */}
            <Route path="/" element={<DB data={data}/> } />
            <Route path="/plate" element={<Food/>}/>
            <Route path="/check" element={<ProfileForm />} />
            <Route path='/signup/*' element={<FirstPage/>}/>
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
