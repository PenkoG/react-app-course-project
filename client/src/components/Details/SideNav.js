import { NavLink } from "react-router-dom";
import styles from "./SideNav.module.css";

export default function SideNav() {

    let movieId = sessionStorage.getItem("movie-id");
    let trailerLink = `/details/${movieId}`;
    let overviewLink = `/details/${movieId}/overview`;

    return (
        <div className="side-nav-container">
            <ul className={styles.side_nav}>
                <li>
                    <NavLink to={trailerLink} className={styles.side_nav_trailer}>trailer</NavLink>
                </li>
                <li className={styles.side_nav_overview} >
                    <NavLink to={overviewLink} className={styles.side_nav_overview}>overview</NavLink>
                </li>
            </ul>
        </div>
    )
}