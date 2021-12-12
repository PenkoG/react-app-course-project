import * as movieService from "../../services/movieService";
import styles from "./Overview.module.css";
import SideNav from "./SideNav"
import Background from "../Background/Background";
import RatingComponent from "../Rating/Rating";

import { useContext } from 'react';
import { useNavigate } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import { MovieContext } from "../../contexts/MovieContext";


export default function OverviewPage() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { movie } = useContext(MovieContext);

    const userId = user['_id'];
    const movieId = movie['_id'];
    const movieOwnerId = movie['ownerId'];

    let buttons = "";

    const deleteHandler = async () => {
        movieService.deleteOne(movieId, user.accessToken)
            .then(res => {
                console.log(res);
                navigate('/')
            }).catch((error) => {
                console.log(error);
            })
    }

    const editHandler = () => {
        navigate(`/update/movieId`)
    }

    if (userId === movieOwnerId) {
        buttons = (<>
            <button className={styles.update} onClick={editHandler}>UPDATE</button>
            <button className={styles.delete} onClick={deleteHandler}>DELETE</button>
        </>)
    }

    return (
        <div>
            <div className={styles.details_overview_container}>
                <SideNav></SideNav>

                <div className={styles.image_container}>
                    <img src={movie.imgUrl} className={styles.movie_image} alt="" />
                </div>

                <div className={styles.info}>
                    <h1 className={styles.title}>{movie.title}</h1>
                    <span className={styles.year}>{movie.year}</span>
                    <span className={styles.pipe}>|</span>
                    <span className={styles.genre}> {movie.genre} </span>
                    <span className={styles.pipe}>|</span>
                    <span className={styles.length}> {movie.duration}m </span>
                    <h2 style={{ color: "white", marginTop: "30px" }}>Storyline</h2>
                    <p className={styles.description}>{movie.description}</p>
                    <RatingComponent movieRating={movie.rating}></RatingComponent>
                    {buttons ? buttons : ""}
                </div>
            </div>
            <Background />
        </div>
    )
}