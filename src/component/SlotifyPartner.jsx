import dana1 from "../asset/dana1.png";
import dana2 from "../asset/dana2.png";


const SlotifyPartner = () => {
    return(
        <div id="partners-slotify">
            <div className="home-footer-partners">
                <div id="atas">
                    <p id="satu">Slotify</p>
                    <p id="dua">Partners</p>
                </div>
                <div id="gambar">
                    <div id="line1">
                        <img src={dana1} alt="" />
                        <img src={dana2} alt="" />
                        <img src={dana1} alt="" />
                        <img src={dana2} alt="" />
                        <img src={dana1} alt="" />
                    </div>
                    <div id="line2">
                        <img src={dana2} alt="" />
                        <img src={dana1} alt="" />
                        <img src={dana2} alt="" />
                        <img src={dana1} alt="" />
                        <img src={dana2} alt="" />
                    </div>
                </div>
            </div>
        </div>

    )

}

export default SlotifyPartner