import SideNav from "./SideNav";
import Video from "./Video";

import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useState, useEffect } from 'react';
import axios from "axios";

export default function DetailsPage() {
    const { user } = useContext(UserContext);
    const [movieData, setMovieData] = useState([]);

    let movieId = sessionStorage.getItem("movie-id");

    useEffect(() => {
        (async () => {
            // console.log("mounted");
            let { data } = await axios.get(`http://localhost:8800/api/movies/find/${movieId}`, { headers: { 'X-Authorization': `${user.accessToken}` } });
            setMovieData(data)
        })();
    }, []);

    return (
        <div className="details-trailer-container">
            <div className="details-trailer-container">
                <div className="main-container">

                    <Video movie={movieData} />

                    <SideNav></SideNav>

                </div>

                <div className="footer-container">
                    <div className="footer">

                        <div className="socialmedia-icons-container">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-imdb"></i>
                        </div>

                        <div className="copyrights">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, dolore &copy;</p>
                        </div>

                        <div className="footer-logos-container">
                            {/* <img src='companyLogos.png' alt="" width="250px" /> */}
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}