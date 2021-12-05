import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useCookies } from 'react-cookie';
import axios from "axios";

export default function LoginPage({ buttonTXT }) {
    const [user, setUser] = useState([]);
    const [cookie, setCookie] = useCookies(['name']);
    let navigate = useNavigate();

    async function onLoginHandler(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let username = formData.get("username");
        let password = formData.get("pass");

        e.currentTarget.username.value = "";
        e.currentTarget.pass.value = "";

        try {
            const { data } = await axios.post("http://localhost:8800/api/auth/login", { username, password });
            setUser(data);
            setCookie(`User`, `${data.accessToken}`, { path: '/' });
            navigate("/");
        } catch (err) {
            alert(`Wrong password or username`);
            console.log(err);
        }
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