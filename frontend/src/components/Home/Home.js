import React,{useState,useEffect,useContext} from 'react'
import { store } from '../../App'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const {token,setToken} = useContext(store);
    const navigate = useNavigate();


    useEffect(()=>{
        if(!token) navigate('/login')
        
        },[])


  return (
    <div>Home</div>
  )
}

export default Home