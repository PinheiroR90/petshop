import './style.css';
import MarkerIcon from '../../assets/marker.png';
import MarkerIconSelected from '../../assets/marker-selected.png'

const Marker = ({lat,lng}:any) => {


  return (
     <div>
      <img src={MarkerIconSelected} />
      <img src="https://th.bing.com/th?id=OIP.2-iZBJy9PVnzZI7_aVMJ7QHaH_&w=240&h=259&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" className="img-marker" />
     </div>
  );
};

export default Marker;