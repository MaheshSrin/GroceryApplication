const ProductCard = (props) => {
  return (
    <div className="col-3 mb-3 mt-3">
      <div class="card">
        <img class="card-img-top" alt="card" src="https://placeimg.com/640/480/tech" />
        <div class="card-body">
          <h5 class="card-title">{props.productTitle}</h5>
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
