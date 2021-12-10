import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import uniqid from 'uniqid';

import * as movieService from "../../services/movieService";
import Background from "../Background/Background";
import Pill from "../Pill/Pill";
import styles from "./Create.module.css";
import { GenreContext } from "../../contexts/GenreContext";

const genresArr = ["Action", "Adventure", "Drama", "Comedy", "Thriller", "Mystery", "Criminal", "Animation", "Family", "Sci-fi"];

export default function CreatePage() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { selectedGenres, onSubmit } = useContext(GenreContext);
    const accessToken = user.accessToken;

    const onCreateHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let description = formData.get('description');
        let imgUrl = formData.get('imgUrl');
        let videoUrl = formData.get('videoUrl');
        let year = formData.get('year');
        let genre = selectedGenres.join(" - ");
        console.log(genre);
        let duration = formData.get('duration');

        let ownerId = user._id;

        let data = { title, description, imgUrl, videoUrl, year, genre, duration, ownerId }

        try {
            movieService.createOne(data, accessToken)
                .then(res => {
                    onSubmit();
                    navigate("/");
                })
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className={styles.create_container}>
                <div className={styles.create_form_container}>
                    <h2>CREATE MOVIE</h2>
                    <form className={styles.create_form} onSubmit={onCreateHandler}>
                        <input className={styles.input} name="title" type="text" placeholder="Movie title" />
                        <input className={styles.input} name="imgUrl" type="text" placeholder="Image url" />
                        <input className={styles.input} name="videoUrl" type="text" placeholder="Trailer url" />
                        <input className={styles.input} name="year" type="text" placeholder="Year" />
                        <textarea className={styles.input, styles.textarea} name="description" type="text" placeholder="Description" />
                        {/* <input className={styles.input} name="genre" type="text" placeholder="genre:" /> */}
                        <input className={styles.duration} name="duration" type="text" placeholder="Duration" />
                        <span className={styles.genre_span}>Choose movie genres</span>
                        <div className={styles.genre_container}>
                            {genresArr.map(x => <Pill key={uniqid()} value={x} />)}
                        </div>
                        <button className={styles.btn} >CREATE</button>
                    </form>
                </div>
            </div>
            <Background />
        </>
    )
}