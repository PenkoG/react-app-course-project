import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function UpdatePage() {
    let navigate = useNavigate();
    let movie = sessionStorage.getItem("movie-info");
    console.log(movie.title);

    useEffect(() => {
    }, [])

    const onUpdateHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let description = formData.get('description');
        let imgUrl = formData.get('imgUrl');
        let trailerUrl = formData.get('trailerUrl');
        let year = formData.get('year');
        let genre = formData.get('genre');
        let duration = formData.get('duration');
        console.log(`Form Data: ${formData}`);
    };


    return (
        <>
            <div className="bgr-container">
                <div className="register-container">
                    <div className="form-container">
                        <h2>UPDATE MOVIE</h2>
                        <form className="register-form" onSubmit={onUpdateHandler}>
                            <input className="input" name="title" type="text" placeholder="Movie title:" value={movie.title} />
                            <input className="input" name="description" type="text" placeholder="Description:" value={movie.description} />
                            <input className="input" name="imgUrl" type="text" placeholder="imgUrl:" value={movie.imgUrl} />
                            <input className="input" name="trailerURL" type="text" placeholder="trailerURL:" value={movie.trailerURL} />
                            <input className="input" name="year" type="text" placeholder="year:" value={movie.year} />
                            <input className="input" name="genre" type="text" placeholder="genre:" value={movie.genre} />
                            <input className="input" name="duration" type="text" placeholder="duration:" value={movie.duration} />
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