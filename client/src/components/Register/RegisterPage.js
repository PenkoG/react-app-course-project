import { useNavigate, Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';

import * as authService from '../../services/authService'
import formExtractor from '../../helpers/formProcessing';
import BasicAlert from '../Alerts/BasicAlert';
import Background from "../Background/Background";
import styles from "./Register.module.css";

const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function RegisterPage() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { login } = useContext(UserContext);

    function onRegisterHandler(e) {
        e.preventDefault();

        let userInputs = formExtractor("register", e);

        if (userInputs.password != userInputs.repass) {
            e.currentTarget.reset();
            alert("passwords mismatch")
            return;
        }

        let { repass, ...userData } = userInputs;

        authService.register(userData)
            .then(res => {
                login(res.data);
                navigate("/");
            }).catch((err) => {
                alert(`User: ${userData.username} is already registered.`)
                console.log(err);
            })
    };

    function formValidation(e) {
        let input = e.currentTarget.value;
        let inputType = e.currentTarget.name;

        if (inputType === "username" && (input.length < 3 || input.length > 12)) {
            setError("Username should be between 3 and 12 charecters!");
        } else {
            setError('')
        }

        if (inputType === "name" && (input.length < 3 || input.length > 12)) {
            setError("Name should be between 3 and 12 charecters!");
        } else if (inputType === "name" && (input.length >= 3 || input.length <= 12)) {
            setError('')
        }

        if (inputType === "email" && (!input.match(regex))) {
            setError("Invalid email!");
        } else if (inputType === "email" && (input.match(regex))) {
            setError('')
        }
    }

    return (
        <>
            {error ? <BasicAlert message={error} /> : ''}
            <div className={styles.register_container}>
                <div className={styles.form_container}>
                    <h2>REGISTER</h2>
                    <form method="POST" onSubmit={onRegisterHandler}>
                        <input className={styles.input} name="username" type="text" placeholder="Username:" onChange={formValidation} />
                        <input className={styles.input} name="name" type="text" placeholder="Name:" onChange={formValidation} />
                        <input className={styles.input} name="email" type="text" placeholder="Email:" onChange={formValidation} />
                        <input className={styles.input} name="password" type="password" placeholder="Password:" />
                        <input className={styles.input} name="rePassword" type="password" placeholder="Repeat password:" />
                        <button className={styles.btn} >REGISTER</button>

                        <p className={styles.message}>Already have an accout?<Link to="/login" style={{ "paddingLeft": "5px" }}> Login</Link></p>

                    </form>
                </div>
            </div>
            <Background></Background>
        </>
    )
}