import { useContext } from "react";
import {PRODUCTS} from "../../../products";
import  "../shop/Shop.css";
import { ShopContext } from "../../Context/shop-context";
import { CartItem } from "./Cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
    const navigate = useNavigate();
  return (
    <div className="cart">
        <div>
            <h1  className="text-[50px]">Your Cart Items</h1>
        </div>
        <div className="cartItems">
            {PRODUCTS.map((product) =>{
                if(cartItems[product.id] !== 0) return <CartItem data={product} />
            })}
        </div>
        {totalAmount > 0 ? 
        <div className="checkout">
            <p> Subtotal: ${totalAmount}</p>
            <button onClick={() => navigate("/")}> Continue Shopping </button>
            <button> Checkout </button>
        </div>
        :<h1 className="text-[50px]"> Your Cart is Empty</h1>}
    </div>
  )
}
