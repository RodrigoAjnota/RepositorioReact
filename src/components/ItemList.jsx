import Item from "./Item";

const ItemList = ( { items } ) => {
    const onAdd = (cantidad) => {
        alert(`Compraste ${cantidad} productos`)
    }

    return(
        <div className="FlexItems">
        {
            items.map(item => <Item key={item.id} id={item.id} name={item.name} img={item.img} type={item.type} price={item.price} description={item.description} stock={item.stock} use={item.use} initial={item.initial} onAdd={onAdd} />)
        }
        </div>
    )
}

export default ItemList;