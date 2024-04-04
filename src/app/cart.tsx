import { Button, Text, View } from "react-native"
import { useCart } from "../providers/CartProvider"

const CartScreen = () =>{
    const {items} = useCart();
    return(
        <View>
            <Text>Cart items length: {items.length}</Text>
        </View>
    )
}

export default CartScreen;