import map from "../../asset/Map1.png";
import selection from "../../asset/SelectLocation.png";
import text from "../../asset/parkinglocationtext.png"

const HomeMap = () => {
    return(
        <div className="home-map">
            <div id="home-map-container">
                <div id="left">
                    <img src={text} alt="" />
                    <img src={selection} alt="" />
                </div>
                <div id="right">
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    )
        
    
}

export default HomeMap