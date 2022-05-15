import ProductRange from "./Product/ProductRange";
import Filter from "./Product/Filter";

const Home = props => {
    const ProductData = [
        {
            productId: 1,
            productTitle: "prod 1",
            productDescription:"this is something",
            productPrice: 200
        },
        {
            productId: 2,
            productTitle: "prod 2",
            productDescription:"this is something",
            productPrice: 200
        },
        {
            productId: 3,
            productTitle: "prod 3",
            productDescription:"this is something",
            productPrice: 200
        },
        {
            productId: 4,
            productTitle: "prod 4",
            productDescription:"this is something",
            productPrice: 200
        },
        {
            productId: 5,
            productTitle: "prod 5",
            productDescription:"this is something",
            productPrice: 200
        },
        {
            productId: 6,
            productTitle: "prod 6",
            productDescription:"this is something",
            productPrice: 200
        },
        {
            productId: 7,
            productTitle: "prod 7",
            productDescription:"this is something",
            productPrice: 200
        },
        {
            productId: 8,
            productTitle: "prod 8",
            productDescription:"this is something",
            productPrice: 200
        }
    ]
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Filter />
                </div>
                <div className="col-md-9">
                    <ProductRange productData={ProductData}/>
                </div>
            </div>
        </div>
    )
}
export default Home