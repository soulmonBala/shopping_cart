
import { PRODUCTS } from "../../../products"
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
        <div className='shopTitle'>
            <h1 className="text-5xl"><b>SoulTech Collections</b></h1>
        </div>
        <div className="products">
            {PRODUCTS.map((product) => (
            // eslint-disable-next-line react/jsx-key
            <Product data={product} />
            ))}
        </div>
    </div>
  );
}


