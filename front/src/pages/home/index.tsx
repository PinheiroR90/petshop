import Header from "../../components/header";
import Map from "../../components/map";
import PetshopComponet from "../../components/petshopComp";
import './style.css'

const Home = () => {

    return(
        <div className="h-100">
            <Header />
            <div className="container-fluid petshop-list-container">
                <div className="col-12 px-4 text-center">
                    <h5>Mais proximo de você (5)</h5>
                </div>
                <ul className="col-12 petshop-list">
                    {[1,2,3,4,5,6].map((item:any)=> (<PetshopComponet />))}
                </ul>
            </div>
            <Map />
        </div>
    )
}
export default Home;