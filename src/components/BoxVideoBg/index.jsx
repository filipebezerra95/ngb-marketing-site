import { BoxVideo, Mask } from "./styles"
import Marketeira from "../../assets/homePage/marketeira.mp4"
import marketing from "../../assets/homePage/marketing.mp4"


function BoxVideoMask() {

    return(
        <BoxVideo>
            <video autoPlay loop muted playsInline>
                <source src={marketing} type="video/mp4"/>
            </video>
            <Mask />
        </BoxVideo>
    )

}

export default BoxVideoMask