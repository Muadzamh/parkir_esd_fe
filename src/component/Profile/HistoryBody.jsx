import sidebarProfile from "../../asset/sidebarProfile2.png"
import sidebarHistory from "../../asset/sidebarHistory2.png"
import sidebarLogout from "../../asset/sidebarLogout.png"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

const HistoryBody = () => {
    const navigate = useNavigate();

    const LogOut = () => {
        Swal.fire({
            icon: "warning",
            title: "Are you sure?",
            text: "You will be logged out of Slotify",
            showCancelButton: true,
            confirmButtonText: "Logout!"
        }). then((result) => {
            if (result.isConfirmed){
                Swal.fire({
                    title: "Logout Success!",
                    icon: "success"
                });
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                navigate("/")
            }
        })
    }

   return(
        <div className="profile-body">
            <div id="profile-body-container">
                <h3>My Account</h3>
                <div id="content-1">
                    <div id="side-bar">
                        <a href="/profile"><img src={sidebarProfile} /></a>
                        <a href="/history"><img src={sidebarHistory} /></a>
                        <a href="#" onClick={(e) => {e.preventDefault(); LogOut()}}><img src={sidebarLogout} /></a>
                    </div>

                    <div id="user-info">
                        <div id="text-1">
                            <h2>HIstory</h2>
                            <p>Your Transaction</p>
                        </div>

                        <div id="value">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste similique magnam provident, nam, quod voluptatibus, suscipit commodi maiores eveniet temporibus cum mollitia. Accusamus necessitatibus molestiae tenetur in enim natus unde?</p>
            
                        </div>
                    </div>
                </div>


            </div>
        </div>
   )
}

export default HistoryBody;