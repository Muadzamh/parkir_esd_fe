import "../../pages/Home.css";
import { useNavigate } from "react-router-dom";
import slotifyImage from "../../asset/Slotify.png"; 
import logoProfile from "../../asset/ProfileIcon.png";

const HomeHeaderNavbarUser = () => {
    const navigate = useNavigate();


    return(
        <div id="home-header">
            <div id="home-header-navbar">
                <div id="left">
                    <div id="img">
                        <a id="logo-pencet" href="/homeuser"><img src={slotifyImage} alt="slotifyImage" /></a>
                    </div>
                    <div id="aboutus">
                        <a href="#" onClick={(e) => {e.preventDefault(); navigate("/homeuser")}}>About us</a>
                        <a href="#" onClick={(e) => {e.preventDefault(); navigate("/homeuser")}}>Promo</a>
                        <a href="#" onClick={(e) => {e.preventDefault(); navigate("/booking")}}>Booking</a>
                        <a href="#" onClick={(e) => {e.preventDefault(); navigate("/homeuser")}}>Location</a>
                    </div>
                </div>

                <div id="right">
                    <a href="/profile"><img id="logo-profile" src={logoProfile} /></a>
                </div>
            </div>
        </div>
    )
}

export default HomeHeaderNavbarUser