import './productCard.css'
const ProductCard = (props) => {
  return (

        <div className="col-lg-3 col-md-4 col-sm-6 mb-3 mt-3 pp">
          <div class="card">
              <div className='img-wrapper'>
                <img class="card-img-top" alt="card" src={props.imgSrc} />
              </div>
            <div class="card-body">
              <strong class="card-title">{props.productTitle}</strong>
              <p>Price: <strong> INR {props.productPrice}</strong></p>
              <p class="card-text" title={props.productDescription}>
                {props.productDescription}

              </p>
                <button className='btn btn-success btn-sm pull-right'>Read More</button>
            </div>
          </div>
        </div>

  );
};
export default ProductCard
