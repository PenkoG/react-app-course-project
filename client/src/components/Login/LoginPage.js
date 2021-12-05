import { useNavigate, Link } from "react-router-dom";
// import { useCookies } from 'react-cookie';

import * as authService from "./../../services/authService";

export default function LoginPage({ onLogin }) {
    let navigate = useNavigate();

    async function onLoginHandler(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let username = formData.get("username");
        let password = formData.get("pass");

        e.currentTarget.username.value = "";
        e.currentTarget.pass.value = "";

        authService.login(username, password)
            .then((authData) => {
                onLogin(authData);
                navigate("/");
            }).catch((err) => {
                alert(`Wrong password or username`);
                console.log(err);
            })
    }

    return (
        <>
            <div className="login-container">
                <div className="form-container">
                    <h2>LOGIN</h2>
                    <form className="login-form" method="POST" onSubmit={onLoginHandler}>
                        <input className="input" type="text" placeholder="Username:" name="username" />
                        <input className="input" type="password" placeholder="Password:" name="pass" />

                        <button className="login-button">LOGIN</button>

                        <p className="message">Don't have an accout? <Link to="/register"> Register</Link></p>
                    </form>
                </div>
            </div>

            <div className="register-bgr-img-container">
                <img className="register-bgr-img" src="registerBGR.png" alt="" />
            </div>
        </>
    )
}