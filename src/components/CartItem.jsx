import { CartContext } from "./CartContext";
import { useContext } from "react";


const CartItem = (items) => {
    const { deleteItem } = useContext(CartContext);

    return(
        <>
            <div>
                <div>
                    <img src={items.img} alt="" />
                </div>
                <div>
                    <h1>{items.name}</h1>
                    <p>{items.price}</p>
                    <button onClick={() => deleteItem(items.id)}>Borrar</button>
                </div>
            </div>
        </>
    )
}

export default CartItem;