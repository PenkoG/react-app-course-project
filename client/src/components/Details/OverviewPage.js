import SideNav from "./SideNav"
import UpdatePage from "../Update/UpdatePage";

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

export default function OverviewPage() {
    const [movieData, setMovieData] = useState({});
    const navigate = useNavigate();

    let id = sessionStorage.getItem("movie-id")
    let updateLink = `/update/${id}`


    useEffect(() => {
        axios.get(`http://localhost:8800/api/movies/find/${id}`)
            .then(res => {
                setMovieData(res.data);
            })
    }, []);
    console.log(movieData);

    function updateMovieHandler() {
        console.log('Here');
        navigate(updateLink);
    }

    return (
        <div className="details-overview-container">
            <SideNav></SideNav>

            <div className="movie-image-container">
                <img src={movieData.imgUrl} className="movie-image" alt="" />
            </div>

            <div className="movie-info-container">
                <h1 className="movie-title">{movieData.title}</h1>
                <span className="movie-year"> year: {movieData.year}</span>
                <span className="pipe">|</span>
                <span className="movie-genre"> {movieData.genre} </span>
                <span className="pipe">|</span>
                <span className="movie-length"> {movieData.duration} </span>
                <p className="movie-description-overview">{movieData.description}</p>
                <Link to={'/update/' + movieData._id}>
                    <button className="login-button-container" onClick={updateMovieHandler} >UPDATE</button>
                </Link>
            </div>

            <div className="overview-bgr-img-container" scr="OverviewBGR.jpg" alt="">
                <img className="overview-bgr-img" scr="OverviewBGR.jpg" alt="" width="100px" />
            </div>
        </div>
    )
}