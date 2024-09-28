import "../../pages/Login.css";
import googleImage from "../../asset/google.png";
import facebookImage from "../../asset/facebook.png";
import appleImage from "../../asset/apple.png";
import noTelp from "../../asset//noTelp.png";
import { useNavigate } from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";
import Swal from 'sweetalert2';


const LoginHome = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Auth = async (e) => {
    
    e.preventDefault();
    try {
      await axios.post("https://07a4-103-194-172-70.ngrok-free.app/login", {
        email: email,
        password: password
      }).then((responses) => {
        console.log(responses);
        localStorage.setItem("token", responses.data.message.data.token.token);
        localStorage.setItem("user", JSON.stringify(responses.data.message.data.user));

        Swal.fire({
          position: "top",
          icon: "success",
          title: `Selamat datang!`,
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/homeuser")
      })
    } catch (error) {
      if (error.response){
        Swal.fire({
          position:"top",
          icon: "error",
          title: "Password atau email salah!",
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  }

  return (

    <div className="App">

      <form onSubmit={Auth}>
        <div id='login-card'>
            <h4 style={{textAlign: "center", marginBottom: "10px", fontSize: "31px"}}>Login to Slotify</h4>
            <div id='gambar-login'>
              <a href='1'><img src={googleImage} alt=''></img></a>
              <a href='1'><img src={appleImage} alt=''></img></a>
              <a href='1'><img src={facebookImage} alt=''></img></a>
              <a href="#" onClick={(e) => {e.preventDefault(); navigate("/login/phone");}}><img src={noTelp} alt=''></img></a>
            </div>

            <div id='login-flow'>
              <label >Email or Username</label>
              <input name='email-or-username' type='text' placeholder='Enter your email or username..' value={email} onChange={(e) => setEmail(e.target.value)}/>
              <label>Password</label>
              <input name='password' type="password" placeholder='Enter your password..' value={password} onChange={(e) => setPassword(e.target.value)}/>

              <button id='button-login'>Login</button>
            </div>

            <a id="forget-pass" href='1'>Forget your Password?</a>
            <p id='text-akhir'>Don’t have an account? <a href="1" onClick={(e) => {e.preventDefault(); navigate("/register")}}>Sign up for Slotify</a></p>
        </div>
      </form>

    </div>
  );
}

export default LoginHome;
