import { useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import { MovieContext } from "../../contexts/MovieContext";

import * as movieService from "../../services/movieService";
import styles from "./Update.module.css";
import styles2 from "../Pill/Pill.module.css";
import Background from "../Background/Background";

let selectedGenres = [];

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
        const duration = formData.get('duration');
        const genre = selectedGenres.join(" - ")

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
                selectedGenres = [];
                navigate(`/details/${movieId}/overview`);
            }).catch((err) => {
                selectedGenres = [];
                console.log(err)
            });
    }

    const onClickHandler = (e) => {
        let genre = e.target.nextSibling.textContent;

        if (selectedGenres.includes(genre)) {
            let index = selectedGenres.indexOf(genre);
            selectedGenres.splice(index, 1);
        } else {
            selectedGenres.push(genre);
        }

        console.log(selectedGenres);
    }
    return (
        <>
            <div className={styles.create_container}>
                <div className={styles.create_form_container}>
                    <h2>EDIT MOVIE</h2>
                    <form className={styles.create_form} onSubmit={onUpdateHandler}>
                        <input className={styles.input} name="title" type="text" placeholder="Movie title" defaultValue={movie.title} />
                        <input className={styles.input} name="imgUrl" type="text" placeholder="Image url" defaultValue={movie.imgUrl} />
                        <input className={styles.input} name="videoUrl" type="text" placeholder="Trailer url" defaultValue={movie.videoUrl} />
                        <input className={styles.input} name="year" type="text" placeholder="Year" defaultValue={movie.year} />
                        <textarea className={styles.input, styles.textarea} name="description" type="text" placeholder="Description" defaultValue={movie.description} />
                        <input className={styles.duration} name="duration" type="text" placeholder="Duration" defaultValue={movie.duration} />
                        <span className={styles.genre_span}>Choose movie genre</span>
                        <div className={styles.genre_container}>
                            <label className={styles2.PillList_item}>
                                <input type="checkbox" name="genre" onClick={onClickHandler} />
                                <span className={styles2.PillList_label} >Action</span>
                            </label>
                            <label className={styles2.PillList_item}>
                                <input type="checkbox" name="genre" onClick={onClickHandler} />
                                <span className={styles2.PillList_label} >Adventure</span>
                            </label>
                            <label className={styles2.PillList_item}>
                                <input type="checkbox" name="genre" onClick={onClickHandler} />
                                <span className={styles2.PillList_label} >Drama</span>
                            </label>
                            <label className={styles2.PillList_item}>
                                <input type="checkbox" name="genre" onClick={onClickHandler} />
                                <span className={styles2.PillList_label} >Comedy</span>
                            </label>
                            <label className={styles2.PillList_item}>
                                <input type="checkbox" name="genre" onClick={onClickHandler} />
                                <span className={styles2.PillList_label} >Thriller</span>
                            </label>
                            <label className={styles2.PillList_item}>
                                <input type="checkbox" name="genre" onClick={onClickHandler} />
                                <span className={styles2.PillList_label} >Mystery</span>
                            </label>
                            <label className={styles2.PillList_item}>
                                <input type="checkbox" name="genre" onClick={onClickHandler} />
                                <span className={styles2.PillList_label} >Criminal</span>
                            </label>
                            <label className={styles2.PillList_item}>
                                <input type="checkbox" name="genre" onClick={onClickHandler} />
                                <span className={styles2.PillList_label} >Animation</span>
                            </label>
                            <label className={styles2.PillList_item}>
                                <input type="checkbox" name="genre" onClick={onClickHandler} />
                                <span className={styles2.PillList_label} >Family</span>
                            </label>
                            <label className={styles2.PillList_item}>
                                <input type="checkbox" name="genre" onClick={onClickHandler} />
                                <span className={styles2.PillList_label} >Sci-fi</span>
                            </label>
                        </div>
                        <button className={styles.btn} >EDIT</button>
                    </form>
                </div>
            </div>
            <Background />
        </>
    )
}