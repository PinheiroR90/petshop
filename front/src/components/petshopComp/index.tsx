import { mdiCash100, mdiCrosshairsGps, mdiStarOutline } from "@mdi/js";
import Icon from "@mdi/react";
import './style.css'

const PetshopComponet = () =>{

    return(
        <li className="petshop d-inline-block">

            <div className="d-iline-block">
            <img src="https://th.bing.com/th?id=OIP.2-iZBJy9PVnzZI7_aVMJ7QHaH_&w=240&h=259&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" className="img-fluid" />
            </div>
            <div className="d-iline-block">
            <b>I love animals</b>
                        <div className="pet-infos">
                            <text>
                                <b>4,5</b>
                            </text>
                            <Icon path={mdiStarOutline}
                                size={1}
                                className="mdi-star"
                            />
                            <Icon path={mdiCash100} size={1} className="mdi-money" />
                            <text>$$$</text>
                            <Icon path={mdiCrosshairsGps} size={1} className="mdi-gps" />
                            <text><b>3,5km</b></text>
                        </div>
                        <label className="badge frete">Frete Grátis</label>
            </div>           
        </li>
    )
}

export default PetshopComponet;