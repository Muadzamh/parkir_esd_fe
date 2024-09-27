import "../../pages/Home.css"
import HomeHeaderNavbarUser from "./HomeHeaderNavbarUser";



const HomeHeaderUser = () => {

    return(
        <div id="home-header">
            <HomeHeaderNavbarUser/>

            <div id="home-header-slogan">
                <h2>"Find Your Spot, Book Your Space"</h2>
                <p>Effortless Parking Solutions!</p>
            </div>

            <div id="home-header-foot">

            </div>
        </div>
    )
}

export default HomeHeaderUser