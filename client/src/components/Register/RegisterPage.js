import { useNavigate, Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

import * as authService from '../../services/authService'

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

        try {
            authService.register(userData)
                .then(res => {
                    login(res.data);
                    navigate("/");
                })
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className="bgr-container">
                <div className="register-container">
                    <div className="form-container">
                        <h2>REGISTER</h2>
                        <form className="register-form" onSubmit={onRegisterHandler}>
                            <input className="input" name="username" type="text" placeholder="Username:" />
                            <input className="input" name="name" type="text" placeholder="Name:" />
                            <input className="input" name="email" type="text" placeholder="Email:" />
                            <input className="input" name="password" type="password" placeholder="Password:" />
                            <input className="input" name="re-password" type="password" placeholder="Repeat password:" />
                            <button className="register-button" >REGISTER</button>

                            <p className="message">Already have an accout?<Link to="/login" style={{ "padding-left": "5px" }}> Login</Link></p>

                        </form>

                    </div>
                </div>

                {/* <div className="register-bgr-img-container">
                    <img className="register-bgr-img" src="registerBGR.png" alt="" />
                </div> */}
            </div>


        </>
    )
}