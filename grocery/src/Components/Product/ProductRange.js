import ProductCard from "./ProductCard";

const ProductRange = (props) => {
  return (
      <div className='product-wrapper'>
        <div className="row">
                {props.productData.map((item)=><ProductCard key={item.productId} productTitle={item.productTitle} productPrice={item.productPrice} productDescription={item.productDescription} imgSrc={item.imgSrc}></ProductCard>)}
            <div class="col-12 text-center mb-3">
           <button type="button" class="btn btn-success">Show More</button>
           </div>
        </div>
      </div>
  );
};
export default ProductRange;
