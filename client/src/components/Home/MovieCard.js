import { useNavigate } from "react-router";

import styles from "./MovieCard.module.css";

export default function MovieCard({ movie }) {
    let navigate = useNavigate()

    function onClickHandler() {
        sessionStorage.setItem("movie-id", movie._id);
        navigate(`details/${movie._id}`);
    }

    return (

        <div className={styles.movie_container} onClick={onClickHandler}>
            <div className={styles.image_container}>
                <img src={movie.imgUrl} alt="img" />
            </div>

            <h2 className={styles.movie_headline}>{movie.title}</h2>
            <p className={styles.movie_description}>{movie.description.substring(0, 205)}</p>

        </div>
    )
}