import ItemList from '../components/ItemList';
import customFetch from '../utils/customFetch';
import { useEffect, useState } from 'react';
import dataProducts from '../utils/data';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            customFetch(2000, dataProducts.filter(item => item.categoryId === parseInt(id)))
            .then(result => setData(result))
            .catch(err => console.log(err))
        } else {
            customFetch(2000, dataProducts)
            .then(result => setData(result))
            .catch(err => console.log(err))
        }
    }, [id]);
    return(
        <>
        {
            <ItemList items={data} />
        }
        </>
    )
}

export default ItemListContainer