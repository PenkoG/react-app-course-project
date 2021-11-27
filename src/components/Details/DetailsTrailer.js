export default function DetailsTrailer() {
    return (
        <div className="details-trailer-container">
            <div className="main-container">

                <div className="video-container">
                    <img className="overlay" src="overlay.png" alt="Overlay" />
                    <video className="background-video main" autoplay="autoplay" loop muted>
                        <source src="venom.mp4" type="video/mp4" />
                    </video >
                </div>

                <div className="side-nav-container">
                    <ul className="side-nav">
                        <li className="side-nav-trailer">trailer</li>
                        <li className="side-nav-cast">cast</li>
                        <li className="side-nav-overview">overview</li>
                        <li className="side-nav-li"></li>
                    </ul>
                </div>

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
                        <p>All rights reserved lorem ipsum dolor sit amet consectetur adipisicing elit &copy;</p>
                    </div>

                    <div className="footer-logos-container">
                        <img src="companylogos.png" alt="" width="250px" />
                    </div>

                </div>
            </div>
        </div>
    )
}