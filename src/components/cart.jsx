import { MdOutlineShoppingCart } from "react-icons/md";

const Cart = () => {
    return(
        <>
            <div className="menuCart">
                <h2 className="menu">Registrarse</h2>
                <h2 className="menu">Iniciar Sesion</h2>
                <MdOutlineShoppingCart className="imgCart" />
            </div>
        </>
    )
}

export default Cart