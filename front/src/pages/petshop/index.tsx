import Icon from "@mdi/react";
import Header from "../../components/header";
import { mdiAccount, mdiCash100, mdiCrosshairsGps, mdiStarOutline } from "@mdi/js";
import './style.css'
import ProductCard from "../../components/products/card";

const Petshop = () =>{

    return(
        <div className="h-100">
            <Header />
          <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img src="https://th.bing.com/th?id=OIP.2-iZBJy9PVnzZI7_aVMJ7QHaH_&w=240&h=259&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" className="img-fluid" />
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
                    <div className="col-10">
                        <h5>Produtos</h5>
                        <br />
                        <div className="row">
                        <ProductCard />
                    </div>
                        </div>
                </div>

           </div>
        </div>
    )
}
export default Petshop;