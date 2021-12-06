import SideNav from "./SideNav"

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from "../../contexts/UserContext";
import { MovieContext } from "../../contexts/MovieContext";
import { useNavigate } from "react-router";


export default function OverviewPage() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext)
    const { movie } = useContext(MovieContext)

    async function deleteHandler() {
        navigate('/')
    }

    return (
        <div className="details-overview-container">
            <SideNav></SideNav>

            <div className="movie-image-container">
                <img src={movie.imgUrl} className="movie-image" alt="" />
            </div>

            <div className="movie-info-container">
                <h1 className="movie-title">{movie.title}</h1>
                <span className="movie-year"> year: {movie.year}</span>
                <span className="pipe">|</span>
                <span className="movie-genre"> {movie.genre} </span>
                <span className="pipe">|</span>
                <span className="movie-length"> {movie.duration} </span>
                <p className="movie-description-overview">{movie.description}</p>
                {user.isAuthenticated ?
                    <Link calssName="update-button-container" to={'/update/' + movie._id} style={{ textDecoration: 'none' }}>
                        <button className="update-button" >UPDATE</button>
                    </Link>
                    : ""}

                <button className="delete-button" onClick={deleteHandler}>DELETE</button>
            </div>

            <div className="overview-bgr-img-container" scr="OverviewBGR.jpg" alt="">
                <img className="overview-bgr-img" scr="OverviewBGR.jpg" alt="" width="100px" />
            </div>
        </div>
    )
}