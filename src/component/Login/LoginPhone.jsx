import { useNavigate } from "react-router-dom"

const LoginPhone = () => {
    const navigate = useNavigate();
 return(
    <div className="login-phone-container">
        <div id="login-phone-card">
            <span>Enter phone number</span>
            <input type="number" name="" id="" placeholder="Phone number.."/>
            <button onClick={() => navigate("/login/phone/code")}>Next</button>
        </div>
    </div>
 )
}

export default LoginPhone