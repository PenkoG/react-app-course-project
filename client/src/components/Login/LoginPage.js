import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";

import * as authService from "./../../services/authService";
import { UserContext } from "../../contexts/UserContext";
import Background from "../Background/Background";
import styles from "./Login.module.css";

export default function LoginPage() {
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    async function onLoginHandler(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let username = formData.get("username");
        let password = formData.get("pass");

        e.currentTarget.username.value = "";
        e.currentTarget.pass.value = "";

        authService.login(username, password)
            .then((authData) => {
                login(authData);
                navigate("/");
            }).catch((err) => {
                alert(`Wrong password or username`);
                console.log(err);
            })
    }

    return (
        <>
            <div className={styles.login_container}>
                <div className={styles.form_container}>
                    <h2>LOGIN</h2>
                    <form method="POST" onSubmit={onLoginHandler}>
                        <input className={styles.input} type="text" placeholder="Username:" name="username" />
                        <input className={styles.input} type="password" placeholder="Password:" name="pass" />

                        <button className={styles.btn}>LOGIN</button>

                        <p className={styles.message}>Don't have an accout? <Link to="/register" style={{ "paddingLeft": "5px" }}> Register</Link></p>
                    </form>
                </div>
            </div>
            <Background />
        </>
    )
}