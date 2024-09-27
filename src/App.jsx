import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LoginPhoneCode from "./component/Login/LoginPhoneCode";
import Policy from "./component/Policy";
import Terms from "./component/Terms";
import LoginPhone from "./component/Login/LoginPhone";
import Register from "./component/Login/Register";
import HomeUser from "./pages/HomeUser";
import Profile from "./pages/Profile";
import History from "./pages/HIstory";
import Booking from "./pages/Booking";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/homeuser" element={<HomeUser/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/login/phone" element={<LoginPhone/>}/>
        <Route path="/login/phone/code" element={<LoginPhoneCode/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/policy" element={<Policy/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/booking" element={<Booking/>}/>

      </Routes>
    </Router>
  );
}

export default App;
