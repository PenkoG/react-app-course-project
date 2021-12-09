import { useState, useEffect } from "react";

import * as movieService from "../../services/movieService";
import MovieCard from "./MovieCard";
import Background from "../Background/Background";
import styles from "./Home.module.css";

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        try {
            movieService.getAll()
                .then(res => {
                    setMovies(res.data);
                })
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <>
            <div className={styles.home_container}>
                <div className={styles.trending_container}>
                    <h2 className={styles.trending_headline}>Trending Now</h2>
                    <div className={styles.movies_container}>
                        {movies.map(x => <MovieCard key={x._id} movie={x} />)}
                    </div>
                </div>
            </div>
            <Background />
        </>
    )
}