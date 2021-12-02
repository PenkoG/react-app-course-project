import { NavLink } from "react-router-dom";

export default function SideNav() {
    return (
        <div className="side-nav-container">
            <ul className="side-nav">
                <li className="side-nav-trailer" >
                    <NavLink to="/details" className="side-nav-trailer">trailer</NavLink>
                </li>
                <li className="side-nav-overview" >
                    <NavLink to="/details/overview" className="side-nav-overview">overview</NavLink>
                </li>
            </ul>
        </div>
    )
}