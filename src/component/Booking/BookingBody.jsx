import "../../pages/Booking.css"
import mobilKiri from "../../asset/mobilKiri.png";
import mobilKanan from "../../asset/mobilKanan.png";
import jam from "../../asset/jam.png";
import tanggal from "../../asset/tanggal.png";
import garis from "../../asset/garis.png"

const BookingBody = () => {

    const dataUser = JSON.parse(localStorage.getItem("user"));




    return (
        <div className="booking-body">
            <div id="booking-body-container">
                <div id="name-page">
                    <h2 id="satu">Booking Your</h2>
                    <h2 id="dua">Parking Area</h2>
                </div>

                <div id="content">
                    <div id="cars-slot">
                        <div id="satu">
                            <button>1</button>
                            <button>2</button>
                        </div>
                        <div id="dua">
                            <button>3</button>
                            <button><img id="gambar-mobil" src={mobilKanan} /></button>
                        </div>
                        <div id="tiga">
                            <button><img id="gambar-mobil" src={mobilKiri} /></button>
                            <button>6</button>
                        </div>
                        <div id="empat">
                            <button><img id="gambar-mobil" src={mobilKiri} /></button>
                            <button><img id="gambar-mobil" src={mobilKanan} /></button>
                        </div>
                        <div id="lima">
                            <button>9</button>
                            <button><img id="gambar-mobil" src={mobilKanan} /></button>
                        </div>
                        <div id="enam">
                            <button><img id="gambar-mobil" src={mobilKiri} /></button>
                            <button>12</button>
                        </div>
                        <div id="tujuh">
                            <button><img id="gambar-mobil" src={mobilKiri} /></button>
                            <button><img id="gambar-mobil" src={mobilKanan} /></button>
                        </div>
                        <div id="delapan">
                            <button>15</button>
                            <button>16</button>
                        </div>
                    </div>

                    <div id="reservation-card">
                        <h3>Reservation</h3>

                        <div id="reservation-field">
                            <div id="parking-location">
                                <label>Parking Location</label>
                                <input type="text" name="" id="parking-location-input" placeholder="Enter your parking location.."/>
                            </div>

                            <section id="floor-spot">
                                <div id="floor">
                                    <label>Floor</label>
                                    <select name="" id="floor">
                                        <option value="none">Select Floor</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <div id="spot">
                                    <label>Spot</label>
                                    <input type="text" name="" id="spot-input" placeholder="Select Spot.."/>
                                </div>

                            </section>

                            <div id="name">
                                <label>Name</label>
                                <input type="text" name="" id="name-input" placeholder={dataUser.fullName}/>

                            </div>

                            <div id="phone">
                                <label>Phone Number</label>
                                <input type="text" name="" id="phone-input" placeholder={dataUser.phone}/>

                            </div>

                            <div id="vehicle-name">
                                <label>Vehicle Name</label>
                                <input type="text" name="" id="vehicle-name-input" placeholder="Enter your vehicle name.."/>

                            </div>

                            <div id="vehicle-type">
                                <label>Vehicle Type</label>
                                <select name="" id="vehicle-name-input">
                                    <option value="">Select vehicle type..</option>
                                    <option value="ferrari">Ferrari</option>
                                    <option value="truk">Truk</option>
                                    <option value="kujang">Kujang</option>
                                </select>

                            </div>

                            <div id="police-number">
                                <label>Police Number</label>
                                <input type="text" name="" id="police-name-input" placeholder="Enter police number.."/>
                            </div>

                            <div id="start">
                                <label>Start</label>
                                <section id="start-container">
                                    <div id="tanggal">
                                        <select name="" id="">
                                            <option value="">tanggal</option>
                                        </select>
                                    </div>
                                    <div id="jam">
                                        <select name="" id="">
                                            <option value="">jam</option>
                                        </select>
                                    </div>
                                </section>
                            </div>

                            <div id="end">
                                <label>End</label>
                                <section id="end-container">
                                    <div id="tanggal">
                                        <select name="" id="">
                                            <option value="">tanggal</option>
                                        </select>
                                    </div>
                                    <div id="jam">
                                        <select name="" id="">
                                            <option value="">jam</option>
                                        </select>
                                    </div>
                                </section>
                            </div>

                            <div id="code-promo">
                                <label>Code Promo</label>
                                <input type="text" name="" id="code-promo-input" placeholder="Enter code promo.."/>

                            </div>

                            <div id="bawah">
                                <a href="#">Detail Ticket</a>
                                <section id="gambar">
                                    <img src={garis} alt="" />
                                </section>
                                <section id="total">
                                    <p>Total:</p>
                                    <p>Rp0,00</p>
                                </section>
                                <section id="tombol">
                                    <button id="cancle">Cancle</button>
                                    <button id="book">Book Now</button>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BookingBody