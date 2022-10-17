
import { Box, Grid, Typography } from "@mui/material";
import Paginations from "../Pagination";
import styles from "./styles.module.css";

const Table = ({ mobiles}) => {
	console.log(mobiles)
	return (
<>

			<Box sx={{pl:2,pr:10,mt:7}}>

{
	mobiles && mobiles.map((mobile,i)=>{
		return <>
			<Box sx={{mt:3}}>
				<Grid container >
					<Grid item xs={5} md={3}>
					<Box sx={{width:"150px",height:"213px"}}>
						<img src={mobile.image}  alt={mobile.title} style={{ maxWidth: "100%",maxHeight:"100%"}}/>
					</Box>
					</Grid>
					<Grid item xs={5} md={5}>
						<Box>
							<Typography sx={{fontSize:"18px",lineHeight:"18px",marginBottom:"10px"}}>{mobile.title}</Typography>
							<Typography sx={{fontSize:"14px",lineHeight:"14px",color:"#878787",marginBottom:"20px"}}>{mobile.ratings}</Typography>
							{
								mobile.specifications.map((item,i)=>{
									return <>
										<Typography sx={{fontSize:"14px",lineHeight:"22px"}}>. {item}</Typography>
									</>
								})
							}
						</Box>
					</Grid>
					<Grid item xs={1} md={2}>
						<Typography  sx={{fontSize:"25px",lineHeight:"19.6px",textAlign:"start",letterSpacing:"normal",paddingBottom:"20px"}}>{mobile.price}</Typography>
						<span  style={{color:"#878787",fontSize:"15px",lineHeight:"14px",textAlign:"start",letterSpacing:"normal",textDecoration: "line-through"}}>{mobile.originalPrice}</span>
						<span style={{color:"#388e3c",fontSize:"15px",lineHeight:"14px",textAlign:"start",letterSpacing:"normal",marginLeft:"20px",fontWeight:"500"}} >{mobile.offerPercentage}</span>
					</Grid>
					<Grid item xs={0} md={2}>
					</Grid>
				</Grid>
			</Box>
		</>
	})
}
		</Box>

		


</>
				
	);
};

export default Table;
