import { useContext } from "react";
import { ShopContext } from "../../Context/shop-context";



export const CartItem = (props) => {
    // eslint-disable-next-line react/prop-types
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);

  return (
    <div className="cartItem">
        <img src={productImage} alt="PICTURE" />
        <div className="description">
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}>-</button>
                <input type="text" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id) }>+</button>
            </div>
        </div>
    </div>
  )
}
