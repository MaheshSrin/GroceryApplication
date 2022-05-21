import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const ProductRange = (props) => {
  console.table('props',props.productData)
  // let pItem = props.productData;
  return (
    <div className="product-wrapper">
      <div className="row">
        {props.productData.map((item) => (
          <ProductCard
            key={item.productId}
            productTitle={item.productTitle}
            productPrice={item.productPrice}
            productDescription={item.productDescription}
            imgSrc={item.imgSrc}
          ></ProductCard>
        ))}
        <div class="col-12 mb-3">
          {/* <button type="button" class="btn btn-success">Show More</button> */}
          <nav
            aria-label="Page navigation example"
          >
            <ul class="pagination">
              <li class="page-item">
                <Link class="page-link" to="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#">
                  1
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#">
                  2
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#">
                  3
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link" to="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default ProductRange;
