import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


export default function RegisterPage() {
    let navigate = useNavigate();

    const onRegisterHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let name = formData.get('name');
        let username = formData.get('username');
        let email = formData.get('email');
        let password = formData.get('password');

        try {
            let result = await axios.post("/auth/register", { name, email, username, password });
            console.log(result);
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <>
            <div className="register-container">
                <div className="form-container">
                    <h2>REGISTER</h2>
                    <form className="register-form" onSubmit={onRegisterHandler}>
                        <input className="input" name="username" type="text" placeholder="Username:" />
                        <input className="input" name="name" type="text" placeholder="Name:" />
                        <input className="input" name="email" type="text" placeholder="Email:" />
                        <input className="input" name="password" type="password" placeholder="Password:" />
                        <input className="input" name="re-password" type="password" placeholder="Repeat password:" />
                        {/* 
                        <div className="radioButton">
                            <input type="radio" id="terms" name="terms" value="huey" />
                            <label className="radioLabel" htmlFor="huey">I accept the terms and conditions.</label>
                        </div> */}

                        <button className="register-button" >REGISTER</button>

                        <p className="message">Already have an accout?<Link to="/login"> Login</Link></p>

                    </form>

                </div>
            </div>

            <div className="register-bgr-img-container">
                <img className="register-bgr-img" src="registerBGR.png" alt="" />
            </div>
        </>
    )
}