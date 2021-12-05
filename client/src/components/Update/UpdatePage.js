import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


export default function UpdatePage() {
    const [movie, setMovie] = useState({});
    let navigate = useNavigate();
    let movieId = sessionStorage.getItem("movie-id");

    useEffect(() => {
        (async () => {
            console.log("mounted");
            let { data } = await axios.get(`http://localhost:8800/api/movies/find/${movieId}`)
            setMovie(data)
        })();
    }, []);

    console.log(movie);


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
            duration
        }

        let result = await axios.put(`http://localhost:8800/api/movies/${movieId}`, data);
        console.log(result);
        navigate(`/details/${movieId}/overview`);
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