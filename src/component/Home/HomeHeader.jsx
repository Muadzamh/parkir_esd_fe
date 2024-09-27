import "../../pages/Home.css"
import HomeHeaderNavbar from "./HomeHeaderNavbar";



const HomeHeader = () => {

    return(
        <div id="home-header">
            <HomeHeaderNavbar/>
            <div id="home-header-slogan">
                <h2>"Find Your Spot, Book Your Space"</h2>
                <p>Effortless Parking Solutions!</p>
            </div>
        </div>
    )
}

export default HomeHeader