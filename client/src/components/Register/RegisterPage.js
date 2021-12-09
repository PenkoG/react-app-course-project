import { useNavigate, Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

import * as authService from '../../services/authService'
import styles from "./Register.module.css";
import Background from "../Background/Background";

export default function RegisterPage() {
    const navigate = useNavigate();
    const { login } = useContext(UserContext);

    async function onRegisterHandler(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let name = formData.get('name');
        let username = formData.get('username');
        let email = formData.get('email');
        let password = formData.get('password');

        let userData = {
            name,
            username,
            email,
            password
        }

        authService.register(userData)
            .then(res => {
                login(res.data);
                navigate("/");
            }).catch((err) => {
                alert(`Wrong password or username`);
                console.log(err);
            })
    };

    return (
        <>
            <div className={styles.register_container}>
                <div className={styles.form_container}>
                    <h2>REGISTER</h2>
                    <form onSubmit={onRegisterHandler}>
                        <input className={styles.input} name="username" type="text" placeholder="Username:" />
                        <input className={styles.input} name="name" type="text" placeholder="Name:" />
                        <input className={styles.input} name="email" type="text" placeholder="Email:" />
                        <input className={styles.input} name="password" type="password" placeholder="Password:" />
                        <input className={styles.input} name="re-password" type="password" placeholder="Repeat password:" />
                        <button className={styles.btn} >REGISTER</button>

                        <p className={styles.message}>Already have an accout?<Link to="/login" style={{ "paddingLeft": "5px" }}> Login</Link></p>

                    </form>
                </div>
            </div>
            <Background></Background>
        </>
    )
}