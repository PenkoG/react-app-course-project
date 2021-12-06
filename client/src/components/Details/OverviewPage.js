import SideNav from "./SideNav"
import { deleteOne } from "../../services/movieService";

import { useContext } from 'react';
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import { UserContext } from "../../contexts/UserContext";
import { MovieContext } from "../../contexts/MovieContext";

export default function OverviewPage() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { movie } = useContext(MovieContext);

    const userId = user['_id'];
    const movieOwnerId = movie['ownerId'];

    let buttons = "";

    const deleteHandler = async () => {
        try {
            deleteOne(userId, user.accessToken)
                .then(res => {
                    navigate('/')
                })
        } catch (error) {
            console.log(error);
        }
    }

    if (userId === movieOwnerId) {
        buttons = (<>
            <Link className="update-button-container" to={'/update/' + movie._id} style={{ textDecoration: 'none' }}>
                <button className="update-button" >UPDATE</button>
            </Link>
            <button className="delete-button" onClick={deleteHandler}>DELETE</button>
        </>)
    }

    return (
        <div className="bgr-container">
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
                    {buttons ? buttons : ""}
                </div>
            </div>
        </div>
    )
}