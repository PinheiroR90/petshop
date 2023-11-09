import './style.css';

const Product = () => {
  return (
    <div className="product col-3">
      <img src="https://th.bing.com/th/id/OIP.1ZwRo-hxwFHF-h2QiqDzEwAAAA?pid=ImgDet&rs=1" className="img-fluid align-center" />
      <button
        className={`btn btn-primary' rounded-circle`}
      >+
      </button>
      <h4>
        <label className="badge badge-primary">
          R$ 34,60
        </label>
      </h4>
      <small>
        <b>Ração para Cães Adultos saco 15kg - Family Plus</b>
      </small>
    </div>
  );
};

export default Product;