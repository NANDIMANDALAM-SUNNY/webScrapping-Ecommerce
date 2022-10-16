import React, { useState } from 'react'
import {Box, Button, Card, Grid, TextField, Typography} from '@mui/material';
import axios from 'axios';



const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit =async ()=>{
        await axios.post(`http://localhost:5000/users/forgot-password`, {"email":email})
        .then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        });
    }
    console.log(email)
  return (
    <>





<Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="100vh"
>
 <Card>
 <Typography>Forgot Password</Typography>
    <TextField  onChange={(e)=>setEmail(e.target.value)}/>
    <Button onClick={handleSubmit}>Submit</Button>
 </Card>
</Box>
    </>

  )
}

export default ForgotPassword