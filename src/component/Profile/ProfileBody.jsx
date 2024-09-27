
import sidebarProfile from "../../asset/sidebarProfile.png"
import sidebarHistory from "../../asset/sidebarHistory.png"
import sidebarLogout from "../../asset/sidebarLogout.png"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



const ProfileBody = () => {
    const navigate = useNavigate();
    const [birthdayData, setBirthdayData] = useState({
        day: '',
        month: '',
        year: ''
    });
    const dataUser = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        if (dataUser && dataUser.dateOfBirth) {
            const [day, month, year] = dataUser.dateOfBirth.split('-');
            setBirthdayData({ day, month, year });
        }
    }, []);
    
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
                            <h2>Profile</h2>
                            <p>Personal Informatio</p>
                        </div>

                        <div id="value">
                            <label>Name</label>
                            <input type="text" name="name" id="profile-name" placeholder={dataUser.fullName}/>

                            <label>Date of birth</label>
                            <div id="inside-date-of-birth">
                                <input type="number" name="day" placeholder={birthdayData.day} id="day"/>
                                <select key={birthdayData.month} name="" id="month" defaultValue={birthdayData.month}>
                                    <option value="jan">Jan</option>
                                    <option value="feb">Feb</option>
                                    <option value="mar">Mar</option>
                                    <option value="apr">Apr</option>
                                    <option value="may">May</option>
                                    <option value="jun">Jun</option>
                                    <option value="jul">Jul</option>
                                    <option value="aug">Aug</option>
                                    <option value="sep">Sep</option>
                                    <option value="oct">Oct</option>
                                    <option value="nov">Nov</option>
                                    <option value="dec">Dec</option>
                                </select>
                                <input type="number" name="year" id="year" placeholder={birthdayData.year}/>
                            </div>

                            <div id="email-pass">
                                <div id="email-box">
                                    <label>Email</label>
                                    <input type="text" name="email" id="profile-email" placeholder={dataUser.email}/>
                                </div>
                                <div id="password-box">
                                    <label>Password</label>
                                    <input type="password" name="password" id="profile-password" placeholder="**************"/>
                                </div>
                                
                            </div>
                            
                            <label>No telp</label>
                            <input type="text" name="phone" id="profile-phone" placeholder={dataUser.phone}/>

                            <div id="button">
                                <button>Save</button>
                            </div>
                            

                        </div>
                    </div>

                    <div id="kosong"></div>

                    <div id="user-info">
                        <div id="text-1">
                            <p>Vehicle Information</p>
                        </div>

                        <div id="value">
                            <label>Vehicle Name</label>
                            <input type="text" name="name" id="profile-name" placeholder="Input your name.."/>

                            <label>Vehicle Type</label>
                            <div id="inside-date-of-birth">
                                <select name="" id="month">
                                    <option value="mobil">Mobil</option>
                                    <option value="motor">Motor</option>
                                </select>
                            </div>
                            
                            <label>Police Number</label>
                            <input type="text" name="phone" id="profile-phone" placeholder="number phone"/>

                            <div id="button">
                                <button>Save</button>
                            </div>
                            

                        </div>
                    </div>
                </div>


            </div>
        </div>
   )
}

export default ProfileBody;