export default function RegisterPage() {
    return (
        <>
            <div className="register-container">
                <div className="form-container">
                    <h2>REGISTER</h2>
                    <form className="register-form">
                        <input className="input" type="text" placeholder="Username:" />
                        <input className="input" type="text" placeholder="Name:" />
                        <input className="input" type="text" placeholder="Email:" />
                        <input className="input" type="password" placeholder="Password:" />
                        <input className="input" type="password" placeholder="Repeat password:" />

                        <div className="radioButton">
                            <input type="radio" id="terms" name="terms" value="huey" />
                            <label className="radioLabel" htmlFor="huey">I accept the terms and conditions.</label>
                        </div>

                        <button className="register-button">REGISTER</button>

                        <p className="message">Already have an accout?<a href="#"> Login</a></p>

                    </form>

                </div>
            </div>

            <div className="register-bgr-img-container">
                <img className="register-bgr-img" src="registerBGR.png" alt="register background image" />
            </div>
        </>
    )
}