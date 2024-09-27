import "../../pages/Home.css";
import { useNavigate } from "react-router-dom";
import slotifyImage from "../../asset/Slotify.png"; 

const HomeHeaderNavbar = () => {
    const navigate = useNavigate();

    return(
        <div id="home-header">
            <div id="home-header-navbar">
                <div id="left">
                    <div id="img">
                        <a id="logo-pencet" href="/"><img src={slotifyImage} alt="slotifyImage" /></a>
                    </div>
                    <div id="aboutus">
                        <a href="#" onClick={(e) => {e.preventDefault(); navigate("/")}}>About us</a>
                        <a href="#" onClick={(e) => {e.preventDefault(); navigate("/")}}>Promo</a>
                        <a href="#" onClick={(e) => {e.preventDefault(); navigate("/")}}>Booking</a>
                        <a href="#" onClick={(e) => {e.preventDefault(); navigate("/")}}>Location</a>
                    </div>
                </div>

                <div id="right">
                    <button id="sign-up" onClick={() => navigate("/register")}>Sign up</button>
                    <button id="login" onClick={() => navigate("/login")}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default HomeHeaderNavbar