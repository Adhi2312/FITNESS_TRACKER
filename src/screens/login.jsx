import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const nav = useNavigate();
  const handleSubmit = async(e) => {
    console.log('Username:', username);
    console.log('Password:', password);

    e.preventDefault();
    try{const res=await fetch('http://localhost:4000/login',{
method: 'POST',
credentials: 'include',
headers: {'Content-Type': 'application/json',
    },
  body:JSON.stringify({username:username, password:password})}
  );
  console.log(res.status);
if (res.status==200)nav('/')}

  catch(error){console.log(error)}
    // Here you would typically handle the login logic, such as sending the credentials to your server  
  }
  return (
    <div className='flex flex-col items-center pt-36 h-screen bg-white font-medium'>
      <form className='flex flex-col gap-5 px-10 py-16 shadow border border-gray-200   rounded-2xl bg-white '>
        <h1 className='mx-auto  text-3xl '>LOGIN</h1>
        
        
        <input onChange={(e)=>{setUsername(e.target.value)}} placeholder='Enter Username' className='w-96 '/>
        
        
       
        <input onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password' className=''/>
        
        <button onClick={handleSubmit} className='bg-blue-700 p-3 w-full rounded-md' >Login</button>
      </form>
      
    </div>
  )
}
