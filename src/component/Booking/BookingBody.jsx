import "../../pages/Booking.css"
import mobilKiri from "../../asset/mobilKiri.png";
import mobilKanan from "../../asset/mobilKanan.png";
import garis from "../../asset/garis.png"
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../Auth/API_URL";
import Swal from "sweetalert2";
import gambar_mobil from "../../asset/gambarMobil.png";

const BookingBody = () => {
    const [selectedSpot, setSelectedSpot] = useState("");
    const dataUser = JSON.parse(localStorage.getItem("user"));

    const [user_id, setUser_id] = useState("");
    const [slot_parkir_id, setSlot_parkir_id] = useState("");
    const [tanggal_booking, setTanggal_booking] = useState("");
    const [denda, setDenda] = useState("");
    const [statuss, setStatuss] = useState("");
    const [berapa_lama_jam, setBerapa_lama_jam] = useState("");
    const [tanggal_mulai, setTanggal_mulai] = useState("");
    const [tanggal_selesai, setTanggal_selesai] = useState("");
    const slotPenuh = ["4", "7", "11", "14"];

    const handleSpotClick = (spot) => {
        if (slotPenuh.includes(spot)) {
            Swal.fire({
                icon: "error",
                title: "Slot tidak tersedia",
                text: "Silakan pilih slot parkir yang kosong",
            });
            return;
        }
        setSelectedSpot(spot);
        setSlot_parkir_id(spot);
    };

    const renderParkingButton = (spot) => {
        const isSlotPenuh = slotPenuh.includes(spot);
        return (
            <button 
                onClick={() => handleSpotClick(spot)} 
                value={spot}
            >
                {isSlotPenuh ? (
                <img 
                    id="gambar-mobil" 
                    src={Number(spot) % 2 === 0 ? mobilKanan : mobilKiri} 
                /> 
            ) : spot}
            </button>
        );
    };

    const handleCancel = (e) => {
        e.preventDefault();
        // Reset semua state ke nilai kosong
        setSelectedSpot("");
        setUser_id("");
        setSlot_parkir_id("");
        setTanggal_booking("");
        setDenda("");
        setStatuss("");
        setBerapa_lama_jam("");
        setTanggal_mulai("");
        setTanggal_selesai("");
    };

    const bookNow = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");

            if (!user_id || !slot_parkir_id || !tanggal_booking || !berapa_lama_jam || !tanggal_mulai || !tanggal_selesai) {
                throw new Error("Semua field harus diisi!");
            }
            if (!token) {
                Swal.fire({
                    icon: "error",
                    title: "Authentication Error",
                    text: "Silakan login terlebih dahulu",
                });
                return;
            }

            await axios.post(`${API_URL}/booking`, {
                user_id: user_id,
                slot_parkir_id: slot_parkir_id,
                tanggal_booking: tanggal_booking,
                denda: denda,
                status: statuss,
                berapa_lama_jam: berapa_lama_jam,
                tanggal_mulai: tanggal_mulai,
                tanggal_selesai: tanggal_selesai
            },{
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
            ).then((response) => {
                console.log(response);
                Swal.fire({
                    html: `
                    <div style="padding: 20px">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px">
                            <div>Jun 21</div>
                            <div>Jun 21</div>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 20px">
                            <div>10:00</div>
                            <div>12:00</div>
                        </div>
                        <img src="${gambar_mobil}" style="width: 100%; margin-bottom: 20px"/>
                        <div style="text-align: left; margin-bottom: 10px">
                            <div>Owner</div>
                            <div style="font-weight: bold">${dataUser.fullName}</div>
                        </div>
                        <div style="text-align: right; margin-bottom: 10px">
                            <div>Location</div>
                            <div style="color: blue">Transmart Buah Batu</div>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-top: 20px">
                            <div>
                                <div>Parking</div>
                                <div>${slot_parkir_id}</div>
                            </div>
                            <div>
                                <div>Booking</div>
                                <div>${tanggal_booking}</div>
                            </div>
                        </div>
                    </div>
                `,  showConfirmButton: false,
                    width: 400,
                    padding: 0,
                    background: '#fff',
                    customClass: {
                        popup: 'booking-success-popup'
                    }
                })
            })
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Booking Failed!",
                text: "Harus terisi semua!",
            })
        }
    }

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
                            {renderParkingButton("1")}
                            {renderParkingButton("2")}
                        </div>
                        <div id="dua">
                            {renderParkingButton("3")}
                            {renderParkingButton("4")}
                        </div>
                        <div id="tiga">
                            {renderParkingButton("5")}
                            {renderParkingButton("6")}
                        </div>
                        <div id="empat">
                            {renderParkingButton("7")}
                            {renderParkingButton("8")}
                        </div>
                        <div id="lima">
                            {renderParkingButton("9")}
                            {renderParkingButton("10")}
                        </div>
                        <div id="enam">
                            {renderParkingButton("11")}
                            {renderParkingButton("12")}
                        </div>
                        <div id="tujuh">
                            {renderParkingButton("13")}
                            {renderParkingButton("14")}
                        </div>
                        <div id="delapan">
                            {renderParkingButton("15")}
                            {renderParkingButton("16")}
                        </div>
                    </div>

                    <div id="reservation-card">
                        <form onSubmit={bookNow}>
                            <h3>Reservation</h3>

                            <div id="reservation-field">

                                <div id="user-id">
                                    <label>User ID</label>
                                    <input type="text" name="" id="user-id-input" placeholder="Enter User ID.." value={user_id} onChange={(e) => setUser_id(e.target.value)}/>
                                </div>

                                <div id="slot-prakir">
                                    <label>Slot Prakir</label>
                                    <input type="text" name="" id="slot-prakir-input" placeholder="Select Slot Prakir di Samping.." value={selectedSpot} readOnly/>
                                </div>

                                <div id="tanggal-booking">
                                    <label>Tanggal Booking</label>
                                    <input type="text" name="" id="tanggal-booking-input" placeholder="Select Tanggal Booking.." value={tanggal_booking} onChange={(e) => setTanggal_booking(e.target.value)}/>
                                </div>

                                <div id="denda">
                                    <label>Denda</label>
                                    <input type="text" name="" id="denda-input" placeholder="Select Denda.." value={denda} onChange={(e) => setDenda(e.target.value)}/>
                                </div>

                                <div id="status">
                                    <label>Status</label>
                                    <input type="text" name="" id="status-input" placeholder="Select Status.." value={statuss} onChange={(e) => setStatuss(e.target.value)}/>
                                </div>

                                <div id="duration">
                                    <label>Duration</label>
                                    <input type="text" name="" id="duration-input" placeholder="Input Duration.." value={berapa_lama_jam} onChange={(e) => setBerapa_lama_jam(e.target.value)}/>
                                </div>

                                <div id="start">
                                    <label>Start</label>
                                    <input type="text" name="" id="tanggal-jam-masuk" placeholder="ex: 2024-09-27 10:00" value={tanggal_mulai} onChange={(e) => setTanggal_mulai(e.target.value)}/>
                                </div>

                                <div id="end">
                                    <label>End</label>
                                    <input type="text" name="" id="tanggal-jam-keluar" placeholder="ex: 2024-09-27 12:00" value={tanggal_selesai} onChange={(e) => setTanggal_selesai(e.target.value)}/>
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
                                        <button id="cancle" onClick={handleCancel}>Cancle</button>
                                        <button id="book" type="submit">Book Now</button>
                                    </section>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BookingBody