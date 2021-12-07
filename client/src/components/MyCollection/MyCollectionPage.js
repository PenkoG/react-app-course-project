import MovieCard from "../Home/MovieCard";
import * as movieService from "../../services/movieService";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function MyCollectionPage() {
    const { user } = useContext(UserContext);
    const [myMovies, setMyMovies] = useState([]);

    useEffect(() => {
        try {
            movieService.getMyMovies(user["_id"])
                .then(res => {
                    console.log(res);
                    setMyMovies(res.data);
                })
        } catch (error) {
            console.log(error);
        }
    }, [])

    let areMovies = Boolean(myMovies.length);
    let noMoviesElement = (
        <div className="no-movies">
            <h1 className="no-movies-h1">
                No movies in your collection yet!
            </h1>
        </div>
    )

    let moviesCardElement = (
        <div className="movies-container">
            {myMovies.map(x => <MovieCard key={x._id} movie={x} />)}
        </div>
    )

    return (
        <>
            <div className="bgr-container">
                <div className="page-container">
                    <div className="my-movies-container">
                        {areMovies ? moviesCardElement : noMoviesElement}
                    </div>
                </div>
            </div>
        </>
    )
}