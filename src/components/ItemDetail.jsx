import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { ImPriceTag, ImWrench, ImSpinner11 } from "react-icons/im";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const ItemDetail = ({item, initial}) => {
    const [ itemCount, setitemCount ] = useState(0);
    const { addItem } = useContext(CartContext);

    const onAdd = (cantidad) => {
        alert(`Compraste ${item.name}, ${cantidad} productos.`)
        setitemCount(cantidad)
        addItem(item, cantidad)
    }

    return(
        <>
        {
        <div className="itemDetailBg">
            <div className="itemDetailFlex">
                <img className="itemDetailImg" src={item.img} alt="" />
                <div>
                    <h1 className="itemDetailFont">{item.name}</h1>
                    <h2 className="itemDetailFont">{item.description}</h2>
                    <div className="itemDescrip">
                        <p><ImWrench className="imgUtily" /> {item.type}</p>
                        <p><ImSpinner11 className="imgUtily" /> {item.use} Uso</p>
                        <p><ImPriceTag className="imgUtily" /> ${item.price}</p>
                    </div>
                </div>
                <div className="itemDetailButon">
                    {
                        itemCount === 0
                        ? <ItemCount initial={initial} stock={item.stock} onAdd={onAdd} />
                        : <Link to='/cart'><button>Ir carrito</button></Link>
                    }
                </div>
            </div>     
        </div> 
        }
        </>
    )
}

export default ItemDetail;