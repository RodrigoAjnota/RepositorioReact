import { Link } from "react-router-dom"
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
    return(
        <>
        <div className="Fondo">
            <div className="NavIzquierda">
                <Link to='/'><h1 className="Logo">MANN.CO</h1></Link>
            </div>
            <div className="NavCentro">
                <Link to='/category/1'><h2>Serie Normal</h2></Link>
                <Link to='/category/2'><h2>Serie Navideña</h2></Link>
                <Link to='/category/3'><h2>Serie Halloween</h2></Link>
            </div>
            <div className="NavDerecho">
                <a href="..." className="MenuCart">Registrarse</a>
                <a href="..." className="MenuCart">Iniciar Sesion</a>
                <a href="..."><MdOutlineShoppingCart className="ImgCart" /></a>
            </div>
        </div>
        </>
    )
}

export default Navbar