import React, { useState } from 'react'
import {Box, Button, Card, CardContent, CardMedia, Grid, TextField, Typography} from '@mui/material';
import axios from 'axios';
import forgotpassword from '../../images/forgotpassword.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const notify = (message) => toast(message,{theme: "colored",});
    const [notification,setNotification] = useState("")
    const handleSubmit =async ()=>{
        await axios.post(`https://webscrap-backend.onrender.com/users/forgot-password`, {"email":email})
        .then((res) => {
            console.log(res.data)
            setNotification(res.data.message)
            notifications()
        }).catch((err) => {
            console.log(err)
            toast.error("Error",{theme:"colored"})
        });
    }

  //  Email Not Found

 const notifications = ()=>{
    if(notification === "Email Not Found"){
       toast.error(notification,{theme: "colored"})
     }else{
       toast.success(notification,{theme: "colored"})
     }

   }

  return (
    <>


    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Card>
      <CardMedia>
        <img src={forgotpassword} />
      </CardMedia>
      <CardContent>
        <Typography variant='h6' sx={{textAlign:'center'}}>Forgot Password?🤔</Typography>
        <Box sx={{mt:3}}>
          <TextField  onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Please Enter Your Mail'/>
          <Button onClick={handleSubmit}>Send Reset mail</Button>
        </Box>
      </CardContent>
      </Card>
    </Box>
    <ToastContainer />
    </>

  )
}

export default ForgotPassword