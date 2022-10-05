import ItemCount from "./ItemCount";
import { ImPriceTag, ImWrench, ImSpinner11 } from "react-icons/im";

const ItemDetail = ({item, initial}) => {
    const onAdd = (cantidad) => {
        alert(`Compraste ${cantidad} productos`)
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
                    <ItemCount initial={initial} stock={item.stock} onAdd={onAdd} />
                </div>
            </div>     
        </div> 
        }
        </>
    )
}

export default ItemDetail;