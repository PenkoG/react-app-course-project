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
                            <p className="movie-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo quidem atque omnis, suscipit rerum sunt quod aperiam debitis id.</p>

                            <div className="rating-container">
                                <p>Rating:</p>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
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
                            <p className="movie-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo quidem atque omnis, suscipit rerum sunt quod aperiam debitis id.</p>

                            <div className="rating-container">
                                <p>Rating:</p>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
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