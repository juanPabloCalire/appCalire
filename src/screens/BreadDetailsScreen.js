 import { StyleSheet, Text, View, Button, Image} from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from "../store/actions/cart.action";

 

const BreadDetailsScreen = () => {
  
  const bread = useSelector((state) => state.breads.selected);

  useEffect(() => {
    console.log(bread);
  }, []);

  const dispatch = useDispatch();

  const handlerAddItemCart = () => dispatch(addItem(bread));
  
 return (
   <View style={styles.container}>
    <Image
      source={{uri: 'https://pixabay.com/get/geabd7101ebc1df26cbdbcd1888a7206b77e6be0ae0b5dba60d9d53f06c308ce2fbd920d05f75077d56c6698819bfaedf4556b884ae62e7d5b200473fa629fda8_1280.jpg'}}
      style={{width: 300, height: 300}}
    />
      
    <View style={styles.screen}>
       
       
       
        <Text style={styles.title}>{bread.name}</Text>
        <Text style={styles.description}>{bread.description}</Text>
        <Text style={styles.price}>${bread.price}</Text>
        <View style={styles.button}>
          <Button title="Agregar al carrito" onPress={handlerAddItemCart} />
        </View>
      </View>
    </View>
  );
 }
 
export default BreadDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  screen: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontFamily: 'ComfortaaBold',
  },
  description: {
    fontSize: 20,
    fontFamily: 'ComfortaaBold',
  },
  price: {
    fontSize: 40,
    fontFamily: 'ComfortaaBold',
  },
  button: {
    marginTop: 15,
    
  },
  imageContainer: {
    height: 100,
    width:100
  }
});