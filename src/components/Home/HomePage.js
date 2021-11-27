export default function HomePage() {

    return (
        <>
            <div className="home-container">

                <div className="trending-container">

                    <h2 className="trending-headline">Trending Now</h2>

                    <div className="movies-container">
                        <div className="movie-card-container">

                            <div className="image-container">
                                <img src="" alt="img" />
                            </div>

                            <h2 className="movie-headline">LOREM IPSUM DOLAR SIT</h2>

                            <div className="rating-container">
                                <p>Rating</p>
                            </div>
                            <div className="bookmark-container">
                                {/* ////TODO: to add bookmark */}
                            </div>

                        </div>
                    </div>
                </div>


                <div className="my-list-container">

                    <h2 className="trending-headline">My List</h2>

                    <div className="movies-container">
                        <div className="movie-card-container">

                            <div className="image-container">
                                <img src="" alt="img" />
                            </div>

                            <h2 className="movie-headline">LOREM IPSUM DOLAR SIT</h2>

                            <div className="rating-container">
                                <p>Rating</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="register-bgr-img-container">
                <img className="register-bgr-img" src="registerBGR.png" alt="register background image" />
            </div>
        </>
    )
}

async function getData() {
    return fetch("http://localhost:3030/data/movies").then(data => data.json());
}