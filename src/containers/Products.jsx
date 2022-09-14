import Product from '../components/Product'

const Products = () => {

    const onAdd = (cantidad) => {
        alert(`Compraste ${cantidad} productos`)
    }

    return(
        <>
            <Product
            id={1} 
            name="Llave"
            img="https://wiki.teamfortress.com/w/images/thumb/8/83/Backpack_Mann_Co._Supply_Crate_Key.png/250px-Backpack_Mann_Co._Supply_Crate_Key.png"
            type="Utilidad"
            prize="100"
            stock="10"
            initial={1}
            onAdd={onAdd}
            />
            <Product
            id={2} 
            name="Caja"
            img="https://wiki.teamfortress.com/w/images/thumb/b/b2/Backpack_Mann_Co._Supply_Crate.png/250px-Backpack_Mann_Co._Supply_Crate.png"
            type="Utilidad"
            prize="30"
            stock="10"
            initial={1}
            onAdd={onAdd}
            />
        </>
    )
}

export default Products