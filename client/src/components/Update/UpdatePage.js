import { useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import { MovieContext } from "../../contexts/MovieContext";

import * as movieService from "../../services/movieService";

export default function UpdatePage() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { movie, onMovieDetail } = useContext(MovieContext);

    const movieId = movie["_id"];
    const accessToken = user.accessToken;

    const onUpdateHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        const title = formData.get('title');
        const description = formData.get('description');
        const imgUrl = formData.get('imgUrl');
        const videoUrl = formData.get('videoUrl');
        const year = formData.get('year');
        const genre = formData.get('genre');
        const duration = formData.get('duration');

        const data = {
            title,
            description,
            imgUrl,
            videoUrl,
            year,
            genre,
            duration,
            ownerId: user['_id']
        }

        movieService.updateOne(data, movieId, accessToken)
            .then(res => {
                onMovieDetail(res.data)
                navigate(`/details/${movieId}/overview`);
            })
    }


    return (
        <>
            <div className="bgr-container">
                <div className="register-container">
                    <div className="form-container">
                        <h2>UPDATE MOVIE</h2>
                        <form className="register-form" onSubmit={onUpdateHandler}>
                            <input className="input" name="title" type="text" placeholder="Movie title:" defaultValue={movie.title} />
                            <input className="input" name="description" type="text" placeholder="Description:" defaultValue={movie.description} />
                            <input className="input" name="imgUrl" type="text" placeholder="imgUrl:" defaultValue={movie.imgUrl} />
                            <input className="input" name="videoUrl" type="text" placeholder="videoUrl:" defaultValue={movie.videoUrl} />
                            <input className="input" name="year" type="text" placeholder="year:" defaultValue={movie.year} />
                            <input className="input" name="genre" type="text" placeholder="genre:" defaultValue={movie.genre} />
                            <input className="input" name="duration" type="text" placeholder="duration:" defaultValue={movie.duration} />
                            <button className="register-button" >UPDATE</button>
                        </form>
                    </div>
                </div>

                <div className="register-bgr-img-container">
                    <img className="register-bgr-img" src="registerBGR.png" alt="" />
                </div>
            </div>
        </>
    )
}