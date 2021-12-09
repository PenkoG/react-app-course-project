import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate } from "react-router";

import NoMoviesPage from "../MyCollection/NoMoviesPage";
import MovieCard from "../Home/MovieCard";
import * as movieService from "../../services/movieService";

export default function MyCollectionPage() {
    const { user } = useContext(UserContext);
    const [myMovies, setMyMovies] = useState([]);

    useEffect(() => {
        movieService.getMyMovies(user["_id"])
            .then(res => {
                setMyMovies(res.data);
            }).catch((err) => console.log(err))
    })

    if (!user.isAuthenticated) {
        return (<Navigate to="/login" />)
    }

    let areMovies = Boolean(myMovies.length);

    let moviesCardElement = (
        <div className="movies-container">
            {myMovies.map(x => <MovieCard key={x._id} movie={x} />)}
        </div>)

    return (
        <>
            <div className="bgr-container">
                <div className="page-container">
                    <div className="my-movies-container">
                        {areMovies ? moviesCardElement : NoMoviesPage}
                    </div>
                </div>
            </div>
        </>
    )
}