import { useState, useEffect } from "react";

import * as movieService from "../../services/movieService";
import MovieCard from "./MovieCard";
import styles from "./Home.module.css";

export default function RatingSection() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        movieService.getHighestRating()
            .then(res => {
                setMovies(res.data);
            }).catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <>
            <h2 className={styles.heading}>Highest Rating</h2>
            <span className={styles.scroll_span}> scroll left or right</span>
            <div className={styles.section_wrapper}>
                <div className={styles.row_wrapper}>
                    {movies.map(x => <MovieCard key={x._id} movie={x} />)}
                </div>
            </div>
        </>
    )
}