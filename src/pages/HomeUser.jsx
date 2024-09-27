import "../pages/Home.css";

import HomeFooter from "../component/Home/HomeFooter";
import HomeBody from "../component/Home/HomeBody";
import SlotifyPartner from "../component/SlotifyPartner";
import HomeHeaderUser from "../component/Home/HomeHeadeUser";

const HomeUser = () => {
    return( 
        <div id="home-container">
            <HomeHeaderUser/>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <HomeMap/>
            <HomeBody/>
            <SlotifyPartner/>
            <HomeFooter/>
        </div>
    )
}

export default HomeUser