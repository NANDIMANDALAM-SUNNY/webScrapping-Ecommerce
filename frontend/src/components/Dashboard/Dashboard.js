import React,{useState,useEffect, useContext} from 'react'
import axios from 'axios'
import Table from './Table'
import Search from './Search'
import Paginations from './Pagination'
import Sort from './Sort'
import { store } from '../../App'
import Pagination from "react-mui-pagination";

import './dashboard.css'
import { Grid } from '@mui/material'

const base_url = "http://localhost:5000/webscrap/product-details";
const Dashboard = () => {
    const [obj, setObj] = useState({});
	const [sort, setSort] = useState({ sort: "rating", order: "desc" });
	const [page, setPage] = useState(1);
	// const [search, setSearch] = useState("");

const {search} = useContext(store)
    const getProducts = async ()=>{
        try {
            const url = `${base_url}?page=${page}&sort=${sort.sort},${sort.order}&search=${search}`;
            const { data } = await axios.get(url);
            setObj(data);
        } catch (err) {
            console.log(err);
        }
    }
console.log(obj)
useEffect(()=>{
    getProducts()
},[sort,page,search])

  return (
   <>
   {/* <div className="wrapper"> */}
			{/* <div className="container"> */}
				{/* <div className="body">
					<div className="table_container">
						<Table mobiles={obj.movies ? obj.movies : []} />
						<Paginations 
							page={page}
							limit={obj.limit ? obj.limit : 0}
							total={obj.total ? obj.total : 0}
							setPage={(page) => setPage(page)}
						/>

					<Pagination limit={obj.limit ? obj.limit : 0}
							total={obj.total ? obj.total : 0}
							setPage={(page) => setPage(page)} />
					</div>
					<div className="filter_container">
						<Sort sort={sort} setSort={(sort) => setSort(sort)} />
					</div>
				</div> */}
			{/* </div> */}
		{/* </div> */}



	<Grid container >
		<Grid item xs={0} md={2}></Grid>
		<Grid item xs={4} md={2}></Grid>
		<Grid item xs={8} md={6}>
		<Table mobiles={obj.movies ? obj.movies : []} />
		</Grid>
		<Grid item xs={0} md={2}></Grid>
	</Grid>					


   </>
  )
}

export default Dashboard