import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import * as movieService from "../../services/movieService";

export default function CreatePage() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const accessToken = user.accessToken;

    const onCreateHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let description = formData.get('description');
        let imgUrl = formData.get('imgUrl');
        let videoUrl = formData.get('videoUrl');
        let year = formData.get('year');
        let genre = formData.get('genre');
        let duration = formData.get('duration');

        let ownerId = user._id;

        let data = { title, description, imgUrl, videoUrl, year, genre, duration, ownerId }

        try {
            movieService.createOne(data, accessToken)
                .then(res => {
                    navigate("/");
                })
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className="bgr-container">
                <div className="register-container">
                    <div className="form-container">
                        <h2>CREATE MOVIE</h2>
                        <form className="register-form" onSubmit={onCreateHandler}>
                            <input className="input" name="title" type="text" placeholder="Movie title:" />
                            <input className="input" name="description" type="text" placeholder="Description:" />
                            <input className="input" name="imgUrl" type="text" placeholder="imgUrl:" />
                            <input className="input" name="videoUrl" type="text" placeholder="videoUrl:" />
                            <input className="input" name="year" type="text" placeholder="year:" />
                            <input className="input" name="genre" type="text" placeholder="genre:" />
                            <input className="input" name="duration" type="text" placeholder="duration:" />
                            <button className="register-button" >CREATE</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}