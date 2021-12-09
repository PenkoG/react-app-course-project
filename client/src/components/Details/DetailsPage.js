import SideNav from "./SideNav";
import Video from "./Video";
import Footer from "../Footer/Footer";
import styles from "./Details.module.css";
import * as movieService from "../../services/movieService";

import { useEffect, useContext } from 'react';
import { MovieContext } from "../../contexts/MovieContext";

export default function DetailsPage() {
    const { movie, onMovieDetail } = useContext(MovieContext);

    let movieId = sessionStorage.getItem("movie-id");

    useEffect(() => {
        try {
            movieService.getOne(movieId)
                .then(res => {
                    onMovieDetail(res.data)
                })
        } catch (error) {
            console.log(error);
        }
    });

    return (
        <>
            <div className={styles.main_container}>
                {movie.videoUrl ? <Video /> : ""}

                <SideNav></SideNav>
            </div>
            <Footer></Footer>
        </>
    )
}