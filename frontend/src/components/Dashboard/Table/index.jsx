
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.css";

const Table = ({ mobiles }) => {
	console.log(mobiles)
	return (
<>

		<div className={styles.container}>
			<div className={styles.heading}>
				<p className={styles.title_tab}>Title</p>
				{/* <p className={styles.genre_tab}>Genre</p> */}
				<p className={styles.rating_tab}>Rating</p>
			</div>
			{/* {movies.map((movie) => (
				<div className={styles.movie} key={movie._id}>
					<div className={styles.title_container}>
						<img src={movie.image} alt="movie" className={styles.movie_img} />
						<p className={styles.movie_title}>
							{movie.name} ({movie.year})
						</p>
					</div>
					<div className={styles.rating_container}>
						<img
							src="./images/star.png"
							alt="star"
							className={styles.star_img}
						/>
						<p className={styles.movie_rating}>{movie.rating}</p>
					</div>
				</div>
			))} */}
		</div>



{/* {movies.map((movie) => (
				<div className={styles.movie} key={movie._id}>
					<div className={styles.title_container}>
						<img src={movie.image} alt="movie" className={styles.movie_img} />
						<p className={styles.movie_title}>
							{movie.name} ({movie.year})
						</p>
					</div>
					<div className={styles.rating_container}>
						<img
							src="./images/star.png"
							alt="star"
							className={styles.star_img}
						/>
						<p className={styles.movie_rating}>{movie.rating}</p>
					</div>
				</div>
			))} */}

{
	mobiles && mobiles.map((mobile,i)=>{
		return <>
		<Box sx={{display:"flex"}}>
				<Box>
					<img src={mobile.image}/>
				</Box>
				<Box>
					<Typography sx={{fontSize:"20px"}}>{mobile.title}</Typography>
					<Typography sx={{fontSize:"20px"}}>{mobile.price}</Typography>
				</Box>
			</Box>
		</>
	})
}

			



</>
				
	);
};

export default Table;
