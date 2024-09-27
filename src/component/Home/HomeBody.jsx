import content2_2 from "../../asset/content2.2.png";
import content_right from "../../asset/content_right.png";
import content2_1 from "../../asset/tangan.png";


const HomeBody = () => {
    return(
        <div className="home-body">
            <div id="home-body-container">

                <div id="atas">
                    <p id="satu">Why Choose</p>
                    <p id="dua">Slotify?</p>
                </div>

                <div id="home-body-content">
                    <div id="home-body-content-left">
                        <div id="content-1">
                            <div id="empty"></div>
                            <div id="font">
                                <h2>View Parking Slots Without Logging In</h2>
                                <p>Enjoy the convenience of viewing real-time parking slot availability without needing to log in. 
                                    Simply access the main page and check the available parking slots at your chosen location.</p>
                            </div>
                        </div>
                        <div id="content-2">
                            <div id="content-2-1">
                                <img src={content2_1} alt="" />
                                <h2>Familiar and Easy-to-Use Interface</h2>
                            </div>
                            <div id="content-2-2">
                                <img src={content2_2} alt="" />
                                <div id="value">
                                    <div id="text">
                                        <h3 id="satu">Informative</h3>
                                        <h3 id="dua">Parking Slot Display</h3>
                                    </div>
                                    <p>We offer clear and detailed parking information. 
                                        With a user-friendly display, you can easily understand the availability and location of parking spots.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="home-body-content-right">
                        <img src={content_right} alt="" />
                        <div id="value">
                            <div id="text">
                                <h2 id="satu">Easy</h2>
                                <h2 id="dua">Access</h2>
                            </div>
                            <p>Once you find a suitable parking slot, you can easily make a reservation by logging in. 
                                The process is quick, secure, and designed for your convenience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBody