

const Product = () => {

    return(
        <div className="product-list col-12">
            <div className="row">
                <div className="col-3">
                    <img src="https://http2.mlstatic.com/D_NQ_NP_2X_619385-MLB71120678501_082023-F.webp" alt="" className="img-fluid" />
                </div>
                <div className="col-6">
                    <h6>
                        <label className="badge ">R$ 34,25</label>
                    </h6>
                    <small>
                        <b>Ração Premier Fórmula para Cães Sênior de Porte Grande e Gigante Sabor Frango 15kg</b>
                    </small>
                </div>
                <div className="col-3">
                    <button className="btn btn-danger rounded-circle">-</button>
                </div>
            </div>
        </div>
    )
}

export default Product;