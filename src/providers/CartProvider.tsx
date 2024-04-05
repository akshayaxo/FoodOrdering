import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CartItem, Product } from "../types";

type CartType = {
    items: CartItem[],
    addItem : (product: Product, size: CartItem['size']) => void;
}

export const CartContext  = createContext<CartType>({
    items:[],
    addItem:()=>{},
});


const CartProvider = ( {children}:PropsWithChildren) =>{
    const [items, setItems] = useState<CartItem[]>([]);
    const addItem = (product: Product, size: CartItem['size']) =>{
        const newCartItem : CartItem = {
            id: product.name + size,
            product,
            product_id : product.id,
            size,
            quantity:1,
        };
        const itemIndex = items.findIndex(item => item.id === newCartItem.id);
        if (itemIndex !== -1) {
          // If the item is found, create a copy of the cartItems array
          const updatedCartItems = [...items];
          const newQuantity = updatedCartItems[itemIndex].quantity + 1;
          // Update the quantity of the item at the found index
          updatedCartItems[itemIndex] = {
           ...updatedCartItems[itemIndex],
           quantity: newQuantity
          };
          setItems(updatedCartItems);
        }
        else{
            setItems([newCartItem, ...items]);
        }
    };

    return (
        <CartContext.Provider
        value={{items, addItem}}>
        {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = () => useContext(CartContext);