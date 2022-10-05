import { useState } from "react";
import { BsDashCircleFill,BsPlusCircleFill } from "react-icons/bs";

const ItemCount = ({initial, stock, onAdd}) => {
    const [carro, setCarro] = useState(initial)

    const carroSuma = () =>{
        setCarro(carro + 1)
    }
    const carroResta = () =>{
        setCarro(carro - 1)
    }

    return(
        <>
        <div className="botones">
            <button className="boton" disabled={carro >= stock} onClick={carroSuma}><BsPlusCircleFill className="imgUtily" /></button>
            <p>{carro}</p>
            <button className="boton" disabled={carro <= 0} onClick={carroResta}><BsDashCircleFill className="imgUtily" /></button>
            <button onClick={() => onAdd(carro)} disabled={carro <= 0} >Comprar</button>
        </div>
        </>
    )
}

export default ItemCount;