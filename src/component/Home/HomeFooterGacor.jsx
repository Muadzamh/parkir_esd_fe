import dana1 from "../../asset/dana1.png";
import dana2 from "../../asset/dana2.png";

const ImageLoop = () => {

    const array = [];

    for (let i = array.length; i < 5; i++){
        if (i % 2 != 0){
            array.push(dana2);
        }else {
            array.push(dana1);
        }
    }
    return array;
}

const HomeFooterGacor = () => {
    return(
        <div className="home-footer">
            <p>Slotify <span>Partners</span></p>
            <div id="gambar">{ImageLoop()}</div>
        </div>
    )

}

export default HomeFooterGacor