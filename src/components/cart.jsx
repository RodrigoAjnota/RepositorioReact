import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
    const { cartList, clearCart } = useContext(CartContext);

    return(
        <>
            {
                cartList.length === 0
                ? <div>
                    <h1>Carrito de Mann.Co</h1>
                    <p>Tu carrito esta vacio...</p>
                    <Link to='/'>Volver a la tienda</Link>
                </div>
                : <div>
                    {cartList.map(item => <CartItem key={item.id} items={item} />)}
                    <button onClick={() => clearCart()}>Borrar Carrito</button>
                </div>
            }
        </>
    )
}

export default Cart