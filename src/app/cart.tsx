import { FlatList, Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { useCart } from "../providers/CartProvider"
import Icon from "react-native-vector-icons/FontAwesome";


const renderItem = ({ item }:any ) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.product.name}</Text>
      <Text style={styles.quantity}>{item.size}</Text>
      <Text style={styles.quantity}>{item.quantity}</Text>
      <Text style={styles.itemPrice}>${item.product.price}</Text>
      <TouchableOpacity style={styles.removeButton}>
        <Icon name="trash" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );

const CartScreen = () =>{
    const {items} = useCart();
    return(
     <View style={styles.container}>
     <FlatList
       data={items}
       renderItem={renderItem}
       keyExtractor={item => item.id}
       contentContainerStyle={styles.list}
     />
   </View>
    )
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333',
    },
    list: {
      flexGrow: 1,
    },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      backgroundColor: '#fff',
      marginBottom: 10,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    itemName: {
      fontSize: 16,
      color: '#333',
    },
    quantity:{
      fontSize: 16,
      color: 'black',
    },
    itemPrice: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#007bff',
    },
    removeButton: {
      backgroundColor: '#dc3545',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 5,
    }
  });
  
  export default CartScreen;