import HomeFooter from "../component/Home/HomeFooter"
import HomeHeaderNavbarUser from "../component/Home/HomeHeaderNavbarUser"
import ProfileBody from "../component/Profile/ProfileBody"
import ellips from "../asset/Ellipse.png"
import "../pages/Profile.css"

const Profile = () => {
    return (
        <div className="profile">
            <img id="navbar-img" src={ellips} alt="" />
            <HomeHeaderNavbarUser/>
            <ProfileBody/>
            <HomeFooter/>
        </div>
    )
}

export default Profile