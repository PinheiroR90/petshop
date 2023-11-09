// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';

import Checkout from './pages/checkout';
import Petshop from './pages/petshop';
import Sidebar from './components/sidebar';
import Cadaster from './pages/cadaster';
import Home from './pages/home';

const Routees = () => {
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/"  Component={Home}/>
        <Route path="/cadastro"  Component={Cadaster}/>
        <Route path="/petshop/:id"  Component={Petshop}/>
        <Route path="/checkout"  Component={Checkout}/>
      </Routes>
      <Sidebar />
    </BrowserRouter>
    )
}

export default Routees;