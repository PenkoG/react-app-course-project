import SideNav from "./SideNav";
import Video from "./Video";
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
        <div className="details-trailer-container">
            <div className="details-trailer-container">
                <div className="main-container">
                    {movie.videoUrl ? <Video /> : ""}

                    <SideNav></SideNav>
                </div>

                <div className="footer-container">
                    <div className="footer">
                        <div className="socialmedia-icons-container">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-imdb"></i>
                        </div>

                        <div className="copyrights">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolore &copy;</p>
                        </div>

                        <div className="footer-logos-container">
                            <img src='companyLogos.png' alt="" width="" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}