import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import * as movieService from "../../services/movieService";
import Background from "../Background/Background";
import styles from "./Create.module.css";

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
            <div className={styles.create_container}>
                <div className={styles.create_form_container}>
                    <h2>CREATE MOVIE</h2>
                    <form className={styles.create_form} onSubmit={onCreateHandler}>
                        <input className={styles.input} name="title" type="text" placeholder="Movie title:" />
                        <input className={styles.input} name="description" type="text" placeholder="Description:" />
                        <input className={styles.input} name="imgUrl" type="text" placeholder="imgUrl:" />
                        <input className={styles.input} name="videoUrl" type="text" placeholder="videoUrl:" />
                        <input className={styles.input} name="year" type="text" placeholder="year:" />
                        <input className={styles.input} name="genre" type="text" placeholder="genre:" />
                        <input className={styles.input} name="duration" type="text" placeholder="duration:" />
                        <button className={styles.btn} >CREATE</button>
                    </form>
                </div>
            </div>
            <Background />
        </>
    )
}