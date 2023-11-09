import { useEffect, useState } from 'react';
import './style.css';
import {Dock} from 'react-dock';
import Product from '../products/lists';

const Sidebar = () =>{
    const [opened,setOpened] =useState(false);

    useEffect(()=>{
        window.addEventListener('openCart',()=>{
            setOpened(true);
        })
    },[])

    return(
        <Dock
          position='right'
          isVisible={opened}
          onVisibleChange={(visible:any)=>setOpened(visible)}
        >
            <div className='container-fluid h-100 pt-4 sidebar'>
                <h3>Meus itens (7)</h3>
                <div className="row products">
                  {[1,2,3,4,5,6,7,8,9].map((i:any)=>(
                    <Product />
                  ))}
              </div>
              <div  className='row align-items-end footer'>
                <div className='col-12 d-flex justify-content-between align-items-center'>
                    <b className='d-inline-block'>Total</b>
                    <h3 className='d-inline-block'>75,50</h3>
                </div>
                <button className='btn btn-clock btn-lg btn-primary rounded-0 h-50 align-items-center'>Finalizar compra</button>
              </div>

            </div>
        </Dock>
    )
}

export default Sidebar;