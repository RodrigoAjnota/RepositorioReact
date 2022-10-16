import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (product, cantidad) => {
        if (isInCart(product.id)){
            const indexItem = cartList.findIndex(elemt => elemt.idItem === product.id)
            cartList[indexItem].cantidad = cartList[indexItem].cantidad + cantidad
            setCartList([...cartList])
        } else{
            setCartList([...cartList, {item: product, cantidad}])
        }
    }

    const clearCart = () => {
        setCartList([])
    }

    const isInCart = (id) => {
        return cartList.some(elemt => elemt.idItem === id)
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem !== id)
        setCartList(result)
    }

    /*const calcTotalPerItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem)
        return cartList[index].costItem * cartList[index].qtyItem
    }

    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.idItem))
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue)
    }

    const calcTaxes = () => {
        return calcSubTotal() * 0.18
    }

    const calcTotal = () => {
        return calcSubTotal()
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qtyItem)
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0)
    }
    
    const value = {
        calcTotalPerItem,
        calcSubTotal,
        calcTaxes,
        calcTotal,
        calcItemsQty
    }*/
    
    return(
        <CartContext.Provider value={{cartList, addItem, clearCart, isInCart, deleteItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;