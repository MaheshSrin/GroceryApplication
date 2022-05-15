import ProductCard from "./ProductCard";

const ProductRange = (props) => {
  return (
    <div className="row">
        {props.productData.map((item)=><ProductCard key={item.productId} productTitle={item.productTitle} productPrice={item.productPrice} productDescription={item.productDescription}></ProductCard>)}
    </div>
  );
};
export default ProductRange;
