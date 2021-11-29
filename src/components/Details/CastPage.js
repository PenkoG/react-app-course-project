import SideNav from "./SideNav";

export default function CastPage() {
    return (
        <div className="details-cast-container">
            <SideNav></SideNav>

            <div className="actor-image">
                <img src="https://i.pinimg.com/736x/70/fe/50/70fe50132b14717ae8d1b7d7f11f9dbe.jpg" alt="" />
            </div>

            <div className="actor-info-container">
                <h1 className="actor-name">Actor Name</h1>
                <span className="role">as Cletus Casedy | Carnage</span>
                <p className="actor-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ea cupiditate provident explicabo exercitationem inventore quae sint saepe tenetur placeat, officia eius aliquid sit ipsum facere vitae dicta debitis expedita eveniet optio a earum repellendus soluta! Illo libero repudiandae ipsum obcaecati eum! Minima ab delectus nam dolores corporis doloremque iure.</p>
            </div>

            <div className="actor-scroll">
                <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F968210608%2F960x0.jpg%3Ffit%3Dscale" alt="" height="100px" />
                <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F968210608%2F960x0.jpg%3Ffit%3Dscale" alt="" height="100px" />
                <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F968210608%2F960x0.jpg%3Ffit%3Dscale" alt="" height="100px" />
            </div>

            <div className="cast-bgr">
            </div>

        </div>
    )
}