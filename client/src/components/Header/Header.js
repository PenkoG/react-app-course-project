import { NavLink } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

export default function Header() {
    const { user } = useContext(UserContext);

    let guestNavigation = (
        <nav className="nav-container">
            <ul className="nav-ul" >
                <NavLink className="nav-link" to="/" >HOME</NavLink>
                <NavLink className="nav-link" to="/login" >LOGIN</NavLink>
                <NavLink className="nav-link" to="/register" >REGISTER</NavLink>
            </ul>
        </nav>
    )

    let userNavigation = (<>
        <nav className="nav-container">
            <ul className="nav-ul" >
                <NavLink className="nav-link" to="/" >HOME</NavLink>
                <NavLink className="nav-link" to="/my-list" >MY COLLECTIONS</NavLink>
                <NavLink className="nav-link" to="/create" >CREATE</NavLink>
                <NavLink className="nav-link logout-link" to="/logout" >Logout</NavLink>
            </ul>
        </nav>
        <div className="right-container">
            <span className="wellcome-span">Wellcome, {user.username}</span>
        </div>
    </>
    )

    return (
        <header className="header-container">

            <div className="logo-container">
                <NavLink to="/">
                    <img src="./logo.png" alt="" width="200px" />
                </NavLink>
            </div>
            {user.isAuthenticated
                ? userNavigation
                : guestNavigation}

            <div className="top-shadow">
                <img src="topGradient.png" alt="" />
            </div>

        </header >
    )
}