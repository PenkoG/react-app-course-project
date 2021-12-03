import SideNav from "./SideNav"

export default function OverviewPage() {
    return (
        <div className="details-overview-container">
            <SideNav></SideNav>

            <div className="movie-image-container">
                <img src="https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg" className="movie-image" alt="" />
            </div>

            <div className="movie-info-container">
                <h1 className="movie-title">Dune</h1>
                <span className="movie-year"> year: 2021</span>
                <span className="pipe">|</span>
                <span className="movie-genre"> Sci-fi </span>
                <span className="pipe">|</span>
                <span className="movie-length"> 140m </span>
                <p className="movie-description-overview">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ea cupiditate provident explicabo exercitationem inventore quae sint saepe tenetur placeat, officia eius aliquid sit ipsum facere vitae dicta debitis expedita eveniet optio a earum repellendus soluta! Illo libero repudiandae ipsum obcaecati eum! Minima ab delectus nam dolores corporis doloremque iure.</p>
            </div>

            <div className="overview-bgr-img-container" scr="OverviewBGR.jpg" alt="">
                <img className="overview-bgr-img" scr="OverviewBGR.jpg" alt="" width="100px" />
            </div>
        </div>
    )
}