import React,{useEffect, useState, } from 'react';
import {useNavigate, useParams, } from 'react-router-dom';

const UpdateComponent =()=>{
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getProductDetails();
        
    },[])

    const getProductDetails = async()=>{
        
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }

    const UpdateProduct = async ()=>{
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method: 'Put',
            body:JSON.stringify({name, price, category, company, params}),
            headers:{
                'Content-Type':'Application/json'
            }
        });
        result = await result.json();
        if (result){
            navigate('/')
        }
    }

    
  return (
    <div className='boxAdd'>
        <h1>UpdateComponent</h1>

        <input className='inputBox' type="text" placeholder='Enter product name' 
            value={name} onChange={(e)=>{ setName(e.target.value)}}
        />
        <input className='inputBox' type="text" placeholder='Enter product price' 
            value={price} onChange={(e)=>{ setPrice(e.target.value)}}
        />
        <input className='inputBox' type="text" placeholder='Enter product category' 
            value={category} onChange={(e)=>{ setCategory(e.target.value)}}
        />
        <input className='inputBox' type="text" placeholder='Enter product company' 
            value={company} onChange={(e)=>{ setCompany(e.target.value)}}
        />

        <button className='appButton' onClick={UpdateProduct}>Update</button>

    </div>
  )
}

export default UpdateComponent;