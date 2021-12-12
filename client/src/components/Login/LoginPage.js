import { useNavigate, Link } from "react-router-dom";
import { useContext, useState } from "react";

import * as authService from "./../../services/authService";
import { UserContext } from "../../contexts/UserContext";
import formExtractor from "../../helpers/formProcessing";
import Background from "../Background/Background";
import styles from "./Login.module.css";
import BasicAlert from "../Alerts/BasicAlert";

export default function LoginPage() {
    const { login } = useContext(UserContext);
    const [error, setError] = useState('');
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

    function formValidation(e) {
        let input = e.currentTarget.value;

        if ((input.length < 3 || input.length > 12)) {
            setError("Username should be between 3 and 12 charecters!");
        } else {
            setError('')
        }
    }

    return (
        <>
            {error ? <BasicAlert message={error} /> : ""}
            <div className={styles.login_container}>
                <div className={styles.form_container}>
                    <h2>LOGIN</h2>
                    <form method="POST" onSubmit={onLoginHandler}>
                        <input className={styles.input} type="text" placeholder="Username:" name="username" onBlur={formValidation} />
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