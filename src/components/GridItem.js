import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React from 'react'

const GridItem = ({item, onSelected}) => {
  return (
       <View style={styles.gridItem }> 
          <TouchableOpacity
              style=
              {{
                  ...styles.container,
                  backgroundColor: item.color
              }}
              onPress={()=>onSelected(item)}>
              <View>
                  <Image style={styles.imageContainer}>{item.image }</Image>
                  <Text style={styles.title}>
                      {item.title}
                  </Text>
                  
              </View>
          </TouchableOpacity>
       </View>
    )
}

export default GridItem

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        bordeRadius: 6,
        margin: 15,
        height:120,
    },
    container: {
        flex: 1,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding:8,
    },
    title: {
        fontFamily: 'ComfortaaBold',  
        
    },
    imageContainer: {
        height: 100,
        width: 100,
        borderRadius:10
    },
    imageContainer: {
        height: 40,
        width:40, 
    }



})