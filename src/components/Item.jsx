import { ImPriceTag, ImWrench, ImSpinner11 } from "react-icons/im";
import { Link } from "react-router-dom";

const Item = ({name, img, price, type, use, id}) => {
    return(
        <div className="FondoItem">
            <h1 className="TituloItem">{name}</h1>
            <div className="FlexProduct">
                <img src={img} alt="..." />
                <div className="itemDescrip">
                    <p><ImWrench className="imgUtily" /> {type}</p>
                    <p><ImSpinner11 className="imgUtily" /> {use} Uso</p>
                    <p><ImPriceTag className="imgUtily" /> $ {price}</p>
                    <Link to={`/item/${id}`}><p>Ver más</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Item;