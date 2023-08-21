import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';

export default function App() {
  return (
    <ScrollView style={{marginTop: 30}}> 

      <Card/>

      <View style={styles.card}>
      <Text style={styles.titulo}>Hello World!</Text>
      <Text >Isto é um parágrafo.</Text>
      <Text style={styles.paragrafo} >Isto é um parágrafo.</Text>
      <Text >Isto é um parágrafo.</Text>
      <StatusBar style="auto" />
    </View>

    <View style={styles.card}>
      <Text style={styles.titulo}>Hello World!</Text>
      <Text >React Native.</Text>
      <Text style={styles.paragrafo} >React Native.</Text>
      <Text >React Native.</Text>
      <StatusBar style="auto" />
    </View>

    <View style={styles.card}>
      <Text style={styles.titulo}>Hello World!</Text>
      <Text >Isto é um parágrafo.</Text>
      <Text style={styles.paragrafo} >Isto é um parágrafo.</Text>
      <Text >Isto é um parágrafo.</Text>
      <StatusBar style="auto" />
    </View>

    </ScrollView>
  );
}

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
