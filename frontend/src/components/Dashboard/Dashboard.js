import React,{useState,useEffect, useContext} from 'react'
import axios from 'axios'
import Main from './Main/Main'
import Paginations from './Pagination'
import Sort from './Sort'
import { store } from '../../App'
import './dashboard.css'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const base_url = "https://webscrapping-backend-task.herokuapp.com/webscrap/product-details";
const Dashboard = () => {
    const [obj, setObj] = useState({});
	const [sort, setSort] = useState({ sort: "rating", order: "desc" });
	const [page, setPage] = useState(1);
	const navigate = useNavigate()
const {search,token} = useContext(store)
    const getProducts = async ()=>{
        try {
            const url = `${base_url}?page=${page}&sort=${sort.sort},${sort.order}&search=${search}`;
            const { data } = await axios.get(url,{
				headers: {
                    'jwt-token':token
				}
			});
            setObj(data);
        } catch (err) {
            console.log(err)
        }
    }
useEffect(()=>{
    getProducts()
	if(!token) navigate('/login')
},[sort,page,search])


console.log(obj.total)
  return (
   <>


<Grid container >
	<Grid item xs={3} md={3}>
	<Sort sort={sort} setSort={(sort) => setSort(sort)} />
	</Grid>
	<Grid item xs={7} md={7}>
		<Main products={obj.products ? obj.products : []} />
		<Paginations 
  			page={page}
  			limit={obj.limit ? obj.limit : 0}
  			total={obj.total ? obj.total : 0}
  			setPage={(page) => setPage(page)}
						/>
	</Grid>
	<Grid item xs={2} md={2}></Grid>
</Grid>


   </>
  )
}

export default Dashboard