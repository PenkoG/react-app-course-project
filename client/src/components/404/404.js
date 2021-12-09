import { Link } from "react-router-dom";

export default function Page404() {

    return (
        < div className="page404-container" >
            <Link to="/" style={{ textDecoration: "none" }}>
                <button className="main-button">GO TO HOME</button>
            </Link>
            <div className="page4040-image-container">
                <img className="register-bgr-img" src="404.png" alt="" />
            </div>
        </div >
    )
}