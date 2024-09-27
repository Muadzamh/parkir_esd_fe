import { useNavigate } from "react-router-dom"

const LoginPhoneCode = () => {
    const navigate = useNavigate();
    return(
        <div className="login-phoneCode-container">
            <div id="login-phoneCode-card">
                <span id="information1">Enter your code</span>
                <input type="number" name="" id="" placeholder="6 digit code.."/>
                <div id="new-code">
                    <a href="/login/phone/code">Get new code</a>
                    <button onClick={() => navigate("/")}>Next</button>
                </div>
                <span id="information2">We send the code to number ..</span>
            </div>
        </div>
    )
}

export default LoginPhoneCode