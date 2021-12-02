import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function CreatePage() {
    let navigate = useNavigate();

    const onCreateHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let description = formData.get('description');
        let imgUrl = formData.get('imgUrl');
        let trailerUrl = formData.get('trailerUrl');
        let year = formData.get('year');
        let genre = formData.get('genre');
        console.log(`Form Data: ${formData}`);
        try {
            await axios.post("http://localhost:8800/api/movies", { title, description, imgUrl, trailerUrl, year, genre });
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <>
            <div className="register-container">
                <div className="form-container">
                    <h2>CREATE MOVIE</h2>
                    <form className="register-form" onSubmit={onCreateHandler}>
                        <input className="input" name="title" type="text" placeholder="Movie title:" />
                        <input className="input" name="description" type="text" placeholder="Description:" />
                        <input className="input" name="imgUrl" type="text" placeholder="imgUrl:" />
                        <input className="input" name="trailerURL" type="text" placeholder="trailerURL:" />
                        <input className="input" name="year" type="text" placeholder="year:" />
                        <input className="input" name="genre" type="text" placeholder="genre:" />
                        <button className="register-button" >CREATE</button>
                    </form>
                </div>
            </div>

            <div className="register-bgr-img-container">
                <img className="register-bgr-img" src="registerBGR.png" alt="" />
            </div>
        </>
    )
}