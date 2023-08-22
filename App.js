import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import Botoes from './components/Botoes';

export default function App() {
  return (
    <ScrollView style={{marginTop: 30}}> 
    <Botoes />

      <Card titulo="Sem conteúdo"/>
      <Card titulo="Mobile">
        <text>React native</text>
      </Card>  

      <Card titulo="Principal" nome="Adriana">
      <Text>Parágrafo 1</Text>
      <Text>Parágrafo 2</Text>
      <Text>Parágrafo 3</Text>
      <Button title='Detalhes'/>

      </Card> 


      <Card titulo="Times de Futebol"></Card>

      

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
