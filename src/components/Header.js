import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="header-container">

            <div className="logo-container">
                <NavLink to="/home">
                    <img src="./logo.png" alt="" width="200px" />
                </NavLink>
            </div>

            <nav className="nav-container">
                <ul className="nav-ul" >
                    <NavLink className="nav-link" activeClassName="active-navlink" to="/home" >HOME</NavLink>
                    <NavLink className="nav-link" activeClassName="active-navlink" to="/details" >Details</NavLink>
                    {/* <NavLink className="nav-link" activeClassName="active-navlink" to="/my-list" >MY LIST</NavLink> */}
                    <NavLink className="nav-link" activeClassName="active-navlink" to="/login" >LOGIN</NavLink>
                    <NavLink className="nav-link" activeClassName="active-navlink" to="/register" >REGISTER</NavLink>
                </ul>
            </nav>

            <div className="right-container">
                <div className="search-icon">
                    <i className="fas fa-search"></i>
                </div>

                <div className="login-button-container">
                    <NavLink to="/login">LogIn</NavLink>
                </div>
            </div>

            <div className="top-shadow">
                <img src="topGradient.png" alt="image" />
            </div>

        </header >
    )
}