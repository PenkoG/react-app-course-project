import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router";

import * as movieService from "../../services/movieService";
import NoMoviesPage from "../MyCollection/NoMoviesPage";
import MovieCard from "../Home/MovieCard";
import Background from "../Background/Background";
import styles from "./MyCollection.module.css";

export default function MyCollectionPage() {
    const { user } = useContext(UserContext);
    const [myMovies, setMyMovies] = useState([]);

    useEffect(() => {
        movieService.getMyMovies(user["_id"])
            .then(res => {
                setMyMovies(res.data);
            }).catch((err) => console.log(err))
    }, [])

    if (!user.isAuthenticated) {
        return (<Navigate to="/login" />)
    }

    const onChangeHandler = (e) => {
        e.preventDefault();

        if (e.target.value === "") {
            movieService.getMyMovies(user["_id"])
                .then(res => {
                    setMyMovies(res.data);
                }).catch((err) => console.log(err))
        } else {
            movieService.getByName(e.target.value)
                .then(res => {
                    setMyMovies(res.data);
                }).catch((err) => console.log(err))
        }
    }

    let areMovies = Boolean(myMovies.length);

    let moviesCardElement = (
        <div className={styles.movies_container}>
            {myMovies.map(x => <MovieCard key={x._id} movie={x} />)}
        </div>)

    return (
        <>
            <div className={styles.page}>
                <div className={styles.my_movies_container}>
                    <div className={styles.search_wrapper}>
                        <input className={styles.search} type="text" name="search" placeholder="search" onChange={onChangeHandler} />
                    </div>
                    <h1 className={styles.headline}>My movies</h1>
                    {areMovies ? moviesCardElement : <NoMoviesPage />}
                </div>
            </div>
            <Background />
        </>
    )
}