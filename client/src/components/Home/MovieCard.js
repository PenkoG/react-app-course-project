import { useNavigate } from "react-router";

export default function MovieCard({ movie }) {
    let navigate = useNavigate()

    function onClickHandler() {
        sessionStorage.setItem("movie-id", movie._id);
        navigate(`details/${movie._id}`);
    }

    return (
        <div className="movie-card-container">

            <div className="image-container">
                <img src={movie.imgUrl} alt="img" />
            </div>

            <h2 className="movie-headline">{movie.title}</h2>
            <p className="movie-description">{movie.description.substring(0, 205)}</p>

            <div className="rating-container">
                <p>Rating:</p>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <button onClick={onClickHandler}>Details</button>
        </div>
    )
}