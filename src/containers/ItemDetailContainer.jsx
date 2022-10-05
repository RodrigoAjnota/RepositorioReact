import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import customFetch from "../utils/customFetch";
import dataProducts from "../utils/data";

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { idItem } = useParams()

    useEffect(() => {
        customFetch(2000, dataProducts.find(item => item.id === parseInt(idItem)))
            .then(result => setData(result))
            .catch(err => console.log(err))
    }, [idItem]);
    return(
        <>
        {
            <ItemDetail item={data} initial={0} />
        }
        </>
    )
}

export default ItemDetailContainer;