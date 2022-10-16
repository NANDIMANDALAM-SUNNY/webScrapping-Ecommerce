import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'



const ResetPassword = () => {
const {token} = useParams()
console.log(token)
  const [verify,setVerify] = useState("")



const verifyToken = async (req,res)=>{

await axios.get(`http://localhost:5000/users/reset-password/${token}`)
  .then((res)=>{
    console.log(res.data)
    setVerify(res.data.message)
  })
}
useEffect(()=>{
verifyToken()
},[])


  return (
    <>

    </>
  )
}

export default ResetPassword