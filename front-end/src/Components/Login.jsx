import React,{useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';

const Login =()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    },[])
    
    const handleLogin= async ()=>{
        let result = await fetch('http://localhost:5000/login',{
            method: 'post',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type':'application/json'
            }
        });
        result = await result.json(); 
        console.warn(result)
        if(result.name){
            localStorage.setItem('user',JSON.stringify(result));
            navigate('/')
        }else{
            alert("Please enter correct details")
        }
    }

  return (
    <div className='boxLogin'>
        <h1>Login</h1>
        <input className='inputBox' type="text" placeholder='Enter Email'
        onChange={(e)=>setEmail(e.target.value)} value={email} />

        <input className='inputBox' type="password" placeholder='Enter Password'
        onChange={(e)=>setPassword(e.target.value)} value={password} />

        <button className='appButton' onClick={handleLogin} type='button'>Login</button>

    </div>
  )
}

export default Login;