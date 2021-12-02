import SideNav from "./SideNav"

export default function OverviewPage() {
    return (
        <div className="details-overview-container">
            <SideNav></SideNav>

            <div className="actor-image-container">
                <img src="" className="actor-image" alt="" />
            </div>

            <div className="movie-info-container">
                <h1 className="movie-name">Lorem Ipsum Dolar</h1>
                <p className="movie-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ea cupiditate provident explicabo exercitationem inventore quae sint saepe tenetur placeat, officia eius aliquid sit ipsum facere vitae dicta debitis expedita eveniet optio a earum repellendus soluta! Illo libero repudiandae ipsum obcaecati eum! Minima ab delectus nam dolores corporis doloremque iure.</p>
                <h1 className="movie-name">Lorem Ipsum Dolar</h1>
                <p className="movie-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ea cupiditate provident explicabo exercitationem inventore quae sint saepe tenetur placeat, officia eius aliquid sit ipsum facere vitae dicta debitis expedita eveniet optio a earum repellendus soluta! Illo libero repudiandae ipsum obcaecati eum! Minima ab delectus nam dolores corporis doloremque iure.</p>
            </div>

            <div className="cast-bgr">
            </div>
        </div>
    )
}