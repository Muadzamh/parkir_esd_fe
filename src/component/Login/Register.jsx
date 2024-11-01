import { useNavigate } from "react-router-dom"
import "../../pages/Login.css"
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { API_URL } from "../Auth/API_URL";

const Register = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState([]);
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [gender, setGender] = useState("");
    const [role, setRole] = useState("");

    const SignUp = async (e) => {
        e.preventDefault();
        try {
                await axios.post(`${API_URL}/register`, {
                fullName: name,
                email: email,
                password: password,
                repeat_password: password,
                phone: phone,
                dateOfBirth: date,
                gender: gender,
                role: role
            }).then((response) => {
                console.log(response); 
                navigate("/login");
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `Berhasil Register!`,
                    showConfirmButton: false,
                    timer: 1500
                })
            });
            
        } catch (error) {
            if (error.response){
                Swal.fire({
                    position: "center",
                    icon: "error",
                    text: "Input harus terisi!",
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }

    useEffect(() => {
        const final_date = [day, month, year].join("-");
        setDate(final_date);
    }, [day, month, year])

    useEffect(() => {
        if(repassword != password){
            Swal.fire({
                position: "center",
                icon: "error",
                text: "Repeat password salah!",
                showConfirmButton: false,
                timer: 1500
            })
        }else{
            setRepassword(password);
        }
    }, [phone])

    

    return(
        <div className="register">
            <form onSubmit={SignUp}>
                <div id="register-card">
                    <p id="title">Create your profile</p>
                    <label>Name</label>
                    <input type="text" name="name" id="register-name" placeholder="Input your name.." value={name} onChange={(e) => setName(e.target.value)}/>
                    <label>Email</label>
                    <input type="text" name="email" id="register-email" placeholder="Input your email.." value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" name="password" id="register-password" placeholder="Input the password.." value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type="password" name="set-password" id="register-repassword" placeholder="repeat password.." value={repassword} onChange={(e) => setRepassword(e.target.value)}/>

                    <label>No telp</label>
                    <input type="text" name="phone" id="register-phone" placeholder="number phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>


                    <label>Date of birth</label>
                    <div id="inside-date-of-birth">
                        <input type="number" name="day" placeholder="dd" id="day" value={day} onChange={(e) => setDay(e.target.value)}/>
                        <select name="" id="month" value={month} onChange={(e) => setMonth(e.target.value)}>
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
                        <input type="number" name="year" id="year" placeholder="yyyy" value={year} onChange={(e) => setYear(e.target.value)}/>
                    </div>

                    <p id="gender">Gender</p>
                    <div id="radio">
                        <div id="radio-man">
                            <input type="radio" name="gender" id="man" value="L" checked={gender === "L"} onChange={(e) => setGender(e.target.value)}/>
                            <label>Man</label>
                            
                        </div>
                        <div id="radio-woman">
                            <input type="radio" name="gender" id="woman" value="P" checked={gender === "P"} onChange={(e) => setGender(e.target.value)}/>
                            <label>Woman</label>
                        </div>
                    </div>

                    <label>Role</label>
                    <select id="register-role" name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>

                    <button>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Register