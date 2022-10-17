import { Button, Card, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext ,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { store } from '../../App'
import '../../App.css'


const Profile = () => {
    const {profile,setToken,token} = useContext(store)
    const navigate = useNavigate()
    useEffect(() => {
        if (!token)  navigate('/login')
    }, [token])
    
    const handleLogout =async ()=>{
        await setToken(localStorage.removeItem("jwt-token"))
    }
    
  return (
    <>
        <Grid container sx={{mt:10}}>
            <Grid xs={3} md={3}></Grid>
            <Grid xs={6} md={6}>
            <Card sx={{height:"250px"}}>
            <Grid container>
                <Grid sx={4} md={4} >
                    <Box sx={{width:"250px",height:"250px"}}>
                        <img src={profile.profile} alt={profile.name} style={{maxHeight:"100%",maxWidth:"100%"}} />
                    </Box>
                </Grid>
                    <Grid sx={2} md={2}></Grid>
                <Grid sx={6} md={6}>
               
                    <Typography variant='h6' sx={{marginRight:"50px"}}>Name: <span >{profile.name}</span> </Typography>
                    <Typography variant='h6' >Email:{profile.email}</Typography>
                    <Typography variant='h6' >Verified user:{profile.isVerified == true?"Yes":"No"}</Typography>
                
                </Grid>
                </Grid>
            </Card>
            <Box >
                <Button varaint="contained"  component={Link} to='/'>Go to home page</Button>
                <Button className='logoutButton' onClick={handleLogout}   varaint="contained" sx={{background:"#cb5a5a",color:"white",float:"right"}} >Log out</Button>
            </Box>
            </Grid>
            <Grid xs={3} md={3}></Grid>
        </Grid>

    </>
  )
}

export default Profile