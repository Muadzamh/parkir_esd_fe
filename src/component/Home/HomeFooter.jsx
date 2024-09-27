import line from "../../asset/Line.png";
import slotifyImage from "../../asset/Slotify.png"; 
import instagramIcon from "../../asset/Instagram Icon.png";
import facebookIcon from "../../asset/Facebook Icon.png";


const HomeFooter = () => {
    return(
        <div id="home-footer">
            {/* <SlotifyPartner/> */}
            <div id="home-footer-image">
                <img id="footer-line" src={line} alt="" />
            </div>
            <div id="home-footer-final">
                <div id="home-footer-final-box">
                    <div>
                        <img id="logo" src={slotifyImage} alt="" />
                    </div>

                    <div id="box-company">
                        <h4>Company</h4>
                        <div id="box-company-info">
                            <a href="/">About us</a>
                            <a href="/">Promo</a>
                            <a href="/">Booking</a>
                            <a href="/">Location</a>
                        </div>
                    </div>
                    <div id="box-Legal">
                        <h4>Legal</h4>
                        <div id="box-legal-info">
                            <a href="/policy">Primary Policy</a>
                            <a href="/terms">Terms & Conditions</a>
                        </div>
                    </div>
                    <div id="box-contact">
                        <h4>Contact us</h4>
                        <div id="box-contact-info">
                            <a href="/">Email: cs@slotify.app</a>
                        </div>
                    </div>
                    <div id="box-sosmed">
                        <h4>Follow us!</h4>
                        <div id="box-sosmed-info">
                            <img src={instagramIcon} alt="" />
                            <img src={facebookIcon} alt="" />
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )

}

export default HomeFooter