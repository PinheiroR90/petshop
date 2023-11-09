 import { useState } from 'react';
 import GoogleMapReact from 'google-map-react';
 import Marker from '../marker';

 import './style.css'
import { dataMap } from '../../dataAPI';

const Map =()=>{
  const[open,setOpen] = useState(true);
  const API_KEY = dataMap;

   return(
    <div className='container-map'>
      {open?   
      <GoogleMapReact
          bootstrapURLKeys={{key:API_KEY}}
          center={{
            lat:-3.7319,
            lng:-38.5267,
          }}
        defaultZoom={15}
        >
          <Marker 
          // lat={-3.7319} 
          // lng={-38.5267}
          />
        </GoogleMapReact> : 'sem mapa'}
    </div>
   )
}

export default Map;