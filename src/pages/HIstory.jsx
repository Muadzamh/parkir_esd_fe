import HomeFooter from "../component/Home/HomeFooter"
import HomeHeaderNavbarUser from "../component/Home/HomeHeaderNavbarUser"
import ellips from "../asset/Ellipse.png"
import "../pages/History.css"
import HistoryBody from "../component/Profile/HistoryBody"

const History = () => {
    return (
        <div className="profile">
            <img id="navbar-img" src={ellips} alt="" />
            <HomeHeaderNavbarUser/>
            <HistoryBody/>
            <HomeFooter/>
        </div>
    )
}

export default History