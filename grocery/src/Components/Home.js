import ProductRange from "./Product/ProductRange";
import Filter from "./Product/Filter";
import ProductBanner from "./ProductBanner";
import Feedback from "./Feedback";
import { useEffect, useState } from "react";


const Home = props => {
    let url_1 = 'http://localhost:3001';
    const [product, setProduct] = useState([]);
    const getProducts = () => {
        fetch(url_1)
        .then(response => response.json())
        .then(productF => {
            setProduct(productF)
            // console.table('Set',setProduct);
            
        })
    }
    useEffect(() => {getProducts()},[])
    // console.table('F',product)

    return (
        <div>
            <ProductBanner/>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Filter />
                    </div>
                    <div className="col-md-9">
                        {/* {product.map(productData => {
                            <ProductRange productData={product}/>
                        })} */}
                     <ProductRange productData={product}/>
                        
                    </div>
                </div>
            </div>
            <Feedback/>
        </div>
    )
}
export default Home