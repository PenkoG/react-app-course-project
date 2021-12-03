import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
    let navigate = useNavigate();

    async function onLoginHandler(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let username = formData.get("username");
        let password = formData.get("pass");
        try {
            let { data, ...info } = await axios.post("http://localhost:8800/api/auth/login", { username, password });
            console.log(data);
            navigate("/");
        } catch (err) {
            console.log(err);
            //Todo: show api respons on client

            //Todo: clear the form 
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