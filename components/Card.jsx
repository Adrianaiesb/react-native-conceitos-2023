import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = () => {
  return (
    <>
    <View style={styles.card}>
      <Text style={styles.titulo}>Hello World!</Text>
      <Text>Card 1</Text>
      <Text>Card 2</Text>
      <Text>Card 3</Text>
    </View>
        
    </>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      borderColor: 'blue',
      borderStyle: 'solid',
      borderWidth: 2,
      marginBottom: 20
    },
  
    card: {
      borderColor: 'yellow',
      borderStyle: 'solid',
      borderWidth: 2,
      marginBottom: 20
    },
  
    card: {
      borderColor: 'green',
      borderStyle: 'solid',
      borderWidth: 2,
      marginBottom: 20
    },
    titulo: {
      color: 'pink',
      fontSize: 30,
      padding: 10,
      marginBottom: 20,
      borderBottomColor: 'red',
      borderBottomStyle: 'solid',
      borderBottomWidth: 2,
      textAlign: 'center',
      backgroundColor: 'red',
    },
  
    paragrafo: {
      fontSize: '20'
    }
  
  });