import React,{useState,useEffect, useContext} from 'react'
import axios from 'axios'
import Table from './Table'
import Paginations from './Pagination'
import Sort from './Sort'
import { useNavigate } from 'react-router-dom'
import { store } from '../../App'
import { Grid } from '@mui/material'
import './dashboard.css'

const base_url = "https://webscrap-backend.onrender.com/webscrap/product-details";
const Dashboard = () => {
	const navigate = useNavigate();
    const [obj, setObj] = useState({});
	const [sort, setSort] = useState({ sort: "rating", order: "desc" });
	const [page, setPage] = useState(1);


const {search,token} = useContext(store)
    const getProducts = async ()=>{
        try {
            const url = `${base_url}?page=${page}&sort=${sort.sort},${sort.order}&search=${search}`;
            const { data } = await axios.get(url,{
				headers:{
					"jwt-token": token
				}
			})
			
			
            setObj(data);
        } catch (err) {
            console.log(err);
        }
    }
console.log(obj)
useEffect(()=>{
	if(!token) navigate('/login')
    getProducts()
},[sort,page,search])
// useEffect(()=>{
	
	
// 	},[])

  return (
   <>



	<Grid container >
		<Grid xs={3} md={3}>
			<Sort sort={sort} setSort={(sort) => setSort(sort)} />
		</Grid>
		<Grid xs={9} md={9}>
				<Table mobiles={obj.movies ? obj.movies : []} page={page}  limit={obj.limit ? obj.limit : 0}   total={obj.total ? obj.total : 0}  setPage={(page) => setPage(page)}/>
				 <Paginations 
					page={page}
					limit={obj.limit ? obj.limit : 0}
					total={obj.total ? obj.total : 0}
					setPage={(page) => setPage(page)}
				/>
		</Grid>
	</Grid>					


   </>
  )
}

export default Dashboard