export default function LoginPage() {
    return (
        <>
            <div className="login-container">
                <div className="form-container">
                    <h2>LOGIN</h2>
                    <form className="login-form">
                        <input className="input" type="text" placeholder="Username:" />
                        <input className="input" type="password" placeholder="Password:" />

                        <button className="login-button">LOGIN</button>

                        <p className="message">Don't have an accout? <a href="#"> Register</a></p>

                    </form>

                </div>
            </div>

            <div className="register-bgr-img-container">
                <img className="register-bgr-img" src="registerBGR.png" alt="register background image" />
            </div>
        </>
    )
}