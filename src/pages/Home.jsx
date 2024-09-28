import "../pages/Home.css";
import HomeHeader from "../component/Home/HomeHeader";
import HomeFooter from "../component/Home/HomeFooter";
import HomeBody from "../component/Home/HomeBody";
import SlotifyPartner from "../component/SlotifyPartner";
import HomeMap from "../component/Home/HomeMap";

const Home = () => {
    return( 
        <div id="home-container">
            <HomeHeader/>
            <br /><br /><br /><br /><br /><br />
            <HomeMap/>
            <HomeBody/>
            <SlotifyPartner/>
            <HomeFooter/>
        </div>
    )
}

export default Home