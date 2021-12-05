import { NavLink } from "react-router-dom";

export default function Header({
    isAuthorized
}) {

    let guestNavigation = (
        <nav className="nav-container">
            <ul className="nav-ul" >
                <NavLink className="nav-link" to="/" >HOME</NavLink>
                <NavLink className="nav-link" to="/register" >REGISTER</NavLink>
            </ul>
        </nav>
    )

    let userNavigation = (
        <nav className="nav-container">
            <ul className="nav-ul" >
                <NavLink className="nav-link" to="/" >HOME</NavLink>
                <NavLink className="nav-link" to="/my-list" >MY LIST</NavLink>
                <NavLink className="nav-link" to="/create" >CREATE</NavLink>
            </ul>
        </nav>
    )

    return (
        <header className="header-container">

            <div className="logo-container">
                <NavLink to="/">
                    <img src="./logo.png" alt="" width="200px" />
                </NavLink>
            </div>
            {isAuthorized
                ? userNavigation
                : guestNavigation}

            <div className="right-container">
                <div className="search-icon">
                    <i className="fas fa-search"></i>
                </div>

                <div className="login-button-container">
                    <NavLink to="/login">LogIn</NavLink>
                </div>
            </div>

            <div className="top-shadow">
                <img src="topGradient.png" alt="" />
            </div>

        </header >
    )
}