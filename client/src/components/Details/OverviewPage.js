import * as movieService from "../../services/movieService";
import styles from "./Overview.module.css";
import SideNav from "./SideNav"
import Background from "../Background/Background";

import { useContext } from 'react';
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
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
        try {
            movieService.deleteOne(movieId, user.accessToken)
                .then(res => {
                    console.log(res);
                    navigate('/')
                })
        } catch (error) {
            console.log(error);
        }
    }

    if (userId === movieOwnerId) {
        buttons = (<>
            <Link className="update-button-container" to={'/update/' + movie._id} style={{ textDecoration: 'none' }}>
                <button className={styles.update} >UPDATE</button>
            </Link>
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
                    <span className={styles.year}> year: {movie.year}</span>
                    <span className={styles.pipe}>|</span>
                    <span className={styles.genre}> {movie.genre} </span>
                    <span className={styles.pipe}>|</span>
                    <span className={styles.length}> {movie.duration} </span>
                    <p className={styles.description}>{movie.description}</p>
                    {buttons ? buttons : ""}
                </div>
            </div>
            <Background />
        </div>
    )
}