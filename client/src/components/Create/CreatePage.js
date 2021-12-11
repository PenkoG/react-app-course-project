import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import * as movieService from "../../services/movieService";
import Background from "../Background/Background";
import styles2 from "../Pill/Pill.module.css";
import styles from "./Create.module.css";

let selectedGenres = [];

export default function CreatePage() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const accessToken = user.accessToken;

    const onCreateHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let description = formData.get('description');
        let imgUrl = formData.get('imgUrl');
        let videoUrl = formData.get('videoUrl');
        let year = formData.get('year');
        let genre = selectedGenres.join(" - ");
        let duration = formData.get('duration');

        let ownerId = user._id;

        let data = { title, description, imgUrl, videoUrl, year, genre, duration, ownerId }

        movieService.createOne(data, accessToken)
            .then(res => {
                selectedGenres = [];
                navigate("/");
            }).catch((err) => {
                console.log(err);
                alert(`All fields are required`);
            })
    };

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
                    <h2>ADD MOVIE TO DATABASE</h2>
                    <form className={styles.create_form} onSubmit={onCreateHandler}>
                        <input className={styles.input} name="title" type="text" placeholder="Movie title" />
                        <input className={styles.input} name="year" type="text" placeholder="Year" />
                        <input className={styles.input} name="imgUrl" type="text" placeholder="Image url" />
                        <input className={styles.input} name="videoUrl" type="text" placeholder="Trailer url" />
                        <textarea className={styles.input, styles.textarea} name="description" type="text" placeholder="Description" />
                        <input className={styles.duration} name="duration" type="text" placeholder="Duration" />
                        <span className={styles.genre_span}>Select movie genre</span>
                        <span className={styles.arrow}>
                            <i className="fas fa-angle-down"></i>
                        </span>
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
                        <button className={styles.btn} >CREATE</button>
                    </form>
                </div>
            </div>
            <Background />
        </>
    )
}