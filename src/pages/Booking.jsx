import BookingBody from "../component/Booking/BookingBody"
import HomeFooter from "../component/Home/HomeFooter"
import HomeHeaderNavbarUser from "../component/Home/HomeHeaderNavbarUser"

const Booking = () => {
    return(
        <div className="booking">
            <HomeHeaderNavbarUser/>
            <BookingBody/>
            <HomeFooter/>
        </div>
    )
}

export default Booking