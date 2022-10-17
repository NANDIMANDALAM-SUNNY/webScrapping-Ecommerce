import React,{useContext, useEffect, useState} from 'react'
import axios from 'axios';
import { Link, Link as RouterLink,useNavigate } from 'react-router-dom';
import { loginSchema } from "../FormsValidations/LoginForm/index";
import { useFormik } from "formik";
import {store} from '../../App'
import logo from '../../images/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';



const Login = () => {
  const navigate = useNavigate();
  const {token,setToken} = useContext(store);
  const notify = (message) => toast(message,{theme: "colored",});
  const [notification,setNotification] = useState("")
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit,} = useFormik({
    initialValues: {
      email: '',
      password:""
    },
    validationSchema: loginSchema,
    onSubmit :async (values,action)=>{
      await  axios.post("https://webscrap-backend.onrender.com/users/login",values)
        .then((res)=>{
          setToken(res.data.data)
          setNotification(res.data.message)
          notifications()
        })
        .catch((err)=>{
          toast.error("Error")
        })
        action.resetForm()
    },
    onChange:(values)=>{
        console.log(values)
    }
  });
   if(token){
     localStorage.setItem('jwt-token',token);
     console.log(token)
     navigate('/')
   } 
   const notifications = ()=>{
    if(notification === "Authentication Failed"){
       toast.error(notification,{theme: "colored"})
     }else{
       toast.success(notification,{theme: "colored"})
     }

   }

 
  return (
    <>
     <Grid container justifyContent="center" alignItems="center">
     <img src={logo} style={{width:"100px",height:"100px"}}/>
     </Grid>
<Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  style={{ minHeight: '100vh' }}
>

  <Grid item xs={3}>
  <Grid item  component={Paper} sx={{width:400,height:450,pt:3}} elevation={6}>
     
    <Box
          sx={{
            mx: 4,          
          }}
        >
          <Box component="form"  noValidate autoComplete='off' onSubmit={handleSubmit} >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  // autoFocus
                  onChange={handleChange}
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && <p className="error">{errors.email}</p>}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  onChange={handleChange}
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  onBlur={handleBlur}
                  value={values.password}
                                />
                  {errors.password && touched.password && (<p className="error">{errors.password}</p>)}
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Sign up
                    </Button>
          </Box>
        </Box>
             <Typography sx={{ml:3}} >Don't have account ?  <Typography  component={RouterLink} to='/register'>Sign up</Typography></Typography>   
             {/* forgot-password */}
             <Typography sx={{ml:3,mt:4}} component={RouterLink} to='/forgot-password'>Fotgot pasword</Typography>

    </Grid>
   </Grid>
   <ToastContainer />
</Grid> 

    </>
  )
}

export default Login

