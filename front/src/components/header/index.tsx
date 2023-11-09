import { mdiCartVariant } from "@mdi/js";
import Icon from "@mdi/react";
import './style.css'
import { Link } from "react-router-dom";

const Header = ({param, hideCart}:any) => {

  const openDrawer = ()=>{
    const event = new CustomEvent('openCart');
    window.dispatchEvent(event);
  }

    return(
        <div className="col-12" style={{fontSize:'30px'}}>
          <Link to={'/'}><header style={param ? {color:'#4682B4'}:{color:'red'}} className="py-3 px-3 text-center">MY PETSHOP</header></Link>
         
          {!hideCart ? <button onClick={openDrawer} className="btn btn-secundary mdi-cart">7 Itens <Icon path={mdiCartVariant} size={1} className="" /></button>:''}
          
        </div>
    )
}

export default Header;