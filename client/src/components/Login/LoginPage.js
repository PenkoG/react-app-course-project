import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";

import * as authService from "./../../services/authService";
import { UserContext } from "../../contexts/UserContext";
import formExtractor from "../../utils/formProcessing";
import Background from "../Background/Background";
import styles from "./Login.module.css";

export default function LoginPage() {
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    async function onLoginHandler(e) {
        e.preventDefault();

        let userInputs = formExtractor("login", e);
        e.currentTarget.reset();

        authService.login(userInputs.username, userInputs.password)
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
                        <input className={styles.input} type="password" placeholder="Password:" name="password" />

                        <button className={styles.btn}>LOGIN</button>

                        <p className={styles.message}>Don't have an accout? <Link to="/register" style={{ "paddingLeft": "5px" }}> Register</Link></p>
                    </form>
                </div>
            </div>
            <Background />
        </>
    )
}