const ProductCard = (props) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-3 mt-3">
      <div class="card">
        <img class="card-img-top" alt="card" src={props.imgSrc} />
        <div class="card-body">
          <strong class="card-title">{props.productTitle}</strong>
          <p>Price: INR {props.productPrice}</p>
          <p class="card-text">
            {props.productDescription}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProductCard
