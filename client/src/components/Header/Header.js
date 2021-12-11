import { NavLink } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import HeaderCSS from "./Header.module.css";

export default function Header() {
    const { user } = useContext(UserContext);

    let guestNavigation = (
        <nav className={HeaderCSS.nav_container}>
            <ul className={HeaderCSS.nav_ul} >
                <NavLink className={HeaderCSS.nav_link} to="/" >HOME</NavLink>
                <NavLink className={HeaderCSS.nav_link} to="/login" >LOGIN</NavLink>
                <NavLink className={HeaderCSS.nav_link} to="/register" >REGISTER</NavLink>
            </ul>
        </nav>
    )

    let userNavigation = (<>
        <nav className={HeaderCSS.nav_container}>
            <ul className={HeaderCSS.nav_ul} >
                <NavLink className={HeaderCSS.nav_link} to="/" >HOME</NavLink>
                <NavLink className={HeaderCSS.nav_link} to="/my-list" >MY COLLECTIONS</NavLink>
                <NavLink className={HeaderCSS.nav_link} to="/create" >CREATE</NavLink>
                <NavLink className={HeaderCSS.logout_link} to="/logout" >LOGOUT</NavLink>
            </ul>
        </nav>
        <div className={HeaderCSS.right_container}>
            <span className={HeaderCSS.wellcome_span}>Welcome, {user.username}</span>
        </div>
    </>
    )

    return (
        <header className={HeaderCSS.header_container}>

            <div className={HeaderCSS.logo_container}>
                <NavLink to="/">
                    <img src="./logo.png" alt="" width="200px" />
                </NavLink>
            </div>
            {user.isAuthenticated
                ? userNavigation
                : guestNavigation}
        </header >
    )
}