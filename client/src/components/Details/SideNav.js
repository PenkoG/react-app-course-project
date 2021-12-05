import { NavLink } from "react-router-dom";

export default function SideNav() {

    let movieId = sessionStorage.getItem("movie-id");
    let trailerLink = `/details/${movieId}`;
    let overviewLink = `/details/${movieId}/overview`;

    return (
        <div className="side-nav-container">
            <ul className="side-nav">
                <li className="side-nav-trailer" >
                    <NavLink to={trailerLink} className="side-nav-trailer">trailer</NavLink>
                </li>
                <li className="side-nav-overview" >
                    <NavLink to={overviewLink} className="side-nav-overview">overview</NavLink>
                </li>
            </ul>
        </div>
    )
}