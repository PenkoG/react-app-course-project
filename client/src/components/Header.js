import { NavLink } from "react-router-dom";

export default function Header({
    username,
    isAuthenticated
}) {

    let guestNavigation = (
        <nav className="nav-container">
            <ul className="nav-ul" >
                <NavLink className="nav-link" to="/" >HOME</NavLink>
                <NavLink className="nav-link" to="/login" >LOGIN</NavLink>
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
                <NavLink className="nav-link" to="/logout" >Logout</NavLink>

            </ul>
            <div className="right-container">
                <p>Wellcome, {username}</p>
                {/* <div className="login-button-container">
                        <NavLink to="/login">LogIn</NavLink>
                    </div> */}
            </div>
        </nav>
    )

    return (
        <header className="header-container">

            <div className="logo-container">
                <NavLink to="/">
                    <img src="./logo.png" alt="" width="200px" />
                </NavLink>
            </div>
            {isAuthenticated
                ? userNavigation
                : guestNavigation}

            <div className="top-shadow">
                <img src="topGradient.png" alt="" />
            </div>

        </header >
    )
}