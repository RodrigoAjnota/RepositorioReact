import { useState } from "react";
import {HiOutlinePlus} from "react-icons/hi";
import {HiOutlineMinus} from "react-icons/hi";

const Product = ({name, img, type, prize, initial, stock, onAdd}) => {
    const [carro, setCarro] = useState(initial)

    const carroSuma = () =>{
        setCarro(carro + 1)
    }
    const carroResta = () =>{
        setCarro(carro - 1)
    }

    return(
        <>
        <div className="card">
            <div className="divImg">
                <img src={img} alt="..." />
            </div>
            <div className="cardBody">
                <h5 className="cardTitle">Producto: {name}</h5>
                <p className="cardText">Tipo: {type}</p>
                <p className="cardText">Precio: ${prize}</p>
                <p className="cardText">Stock: {stock}</p>
                <div className="botones">
                    <button className="boton" disabled={carro >= stock} onClick={carroSuma}><HiOutlinePlus /></button>
                    <p>{carro}</p>
                    <button className="boton" disabled={carro <= 1} onClick={carroResta}><HiOutlineMinus /></button>
                    <button onClick={() => onAdd(carro)}>Comprar</button>
                </div>
            </div>
        </div>
        <hr />
        </>
    )
}

export default Product