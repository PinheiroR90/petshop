// import Logo from '../../assets/logo.jpg'
import Animal from '../../assets/animal.svg'
import Header from '../../components/header';
import '../../index.css'

const Cadaster = () =>{

    return(
        <div className="container-fluid h-100 bg-primary"> 
            <div className="">
            
            </div>
                <div className="col 12 my-auto">
                   <Header  hideCart/>
                </div>

           <div className='row'>
                <div className='col-6 text-right my-auto'>
                    <img src={Animal} alt="" className='img-fluid'/>
                    {/* <h3>IMAGEM ILUSTRAÇÃO</h3> */}
                </div>
                    <div className='col-6'>
                    <div className='box col-8'>
                        <h2 className='text-center'>Falta pouco para seu cadastro</h2>  
                        <br /><br />
                        <input type="text" className='form-control form-control-lg mb-3' placeholder='seu nome completo' />  
                        <input type="email" className='form-control form-control-lg mb-3'  placeholder='seu email' />  
                        <input type="number" className='form-control form-control-lg mb-3'  placeholder='seu contato' />  
                        <input type="password" className='form-control form-control-lg mb-3'  placeholder='senha' />  
                        <button className='btn btn-lg btn-block btn-secundary mb-3'>Finalizar Pedido</button>
                    </div>
            </div>
                {/* <img src={Animal} alt="" /> */}
           </div>

        </div>
    )
}

export default Cadaster;