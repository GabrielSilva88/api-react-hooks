import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// adicionado atraves do npm install: npm install @react-native-async-storage/async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {

  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');

  //ComponentDidMount
  useEffect(() => {

    async function getStorage() {
      const nomeStorage = await AsyncStorage.getItem('nomes');
      if (nomeStorage !== null) {
        setNome(nomeStorage);
      }
    }

    getStorage();

  }, []);

  //ComponentDidUpdate
  useEffect(() => {

    async function saveStorage() {
      await AsyncStorage.setItem('nomes', nome);
    }
    
    saveStorage();

  }, [nome])

  function alterarNome() {
    setNome(input);
    setInput('');

  }

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.Input}
        placeholder="Seu nome..."
        value={input}
        onChangeText={(texto) => setInput(texto)} />

      <TouchableOpacity style={styles.btn} onPress={alterarNome}>
        <Text style={styles.btnTexto}>
          Altera Nome
        </Text>
      </TouchableOpacity>
      <Text style={styles.texto}>{nome}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  texto: {
    color: '#322e31',
    fontSize: 40
  },
  btn: {
    backgroundColor: '#0f26e3',
    alignItems: 'center'
  },
  btnTexto: {
    color: '#ffffff'
  },
  Input: {
    fontSize: 21,
    justifyContent: 'center'

  }
});


/**
 *   useState hooks
 * 
export default function App() {

  const [nome, setNome] = useState("Gabriel");
  const [input, setInput] = useState('');

  function alterarNome() {
    setNome("input");

  }

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.Input}
        placeholder="Seu nome..."
        value={input}
        onChangeText={(texto) => setInput(texto)} />

      <TouchableOpacity style={styles.btn} onPress={alterarNome}>
        <Text style={styles.btnTexto}>
          Altera Nome
        </Text>
      </TouchableOpacity>
      <Text style={styles.texto}>{nome}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  texto: {
    color: '#322e31',
    fontSize: 40
  },
  btn: {
    backgroundColor: '#0f26e3',
    alignItems: 'center'
  },
  btnTexto: {
    color: '#ffffff'
  },
  Input: {
    fontSize: 21,
    marginTop: 85,
    justifyContent:'center'
  
  }
});

 */

/**
 *      49. Api useEffect 
 * 
 * import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// adicionado atraves do npm install: npm install @react-native-async-storage/async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {

  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');

  //ComponentDidMount
  useEffect(() => {

    async function getStorage() {
      const nomeStorage = await AsyncStorage.getItem('nomes');
      if (nomeStorage !== null) {
        setNome(nomeStorage);
      }
    }

    getStorage();

  }, []);

  //ComponentDidUpdate
  useEffect(() => {

    async function saveStorage() {
      await AsyncStorage.setItem('nomes', nome);
    }
    
    saveStorage();

  }, [nome])

  function alterarNome() {
    setNome(input);
    setInput('');

  }

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.Input}
        placeholder="Seu nome..."
        value={input}
        onChangeText={(texto) => setInput(texto)} />

      <TouchableOpacity style={styles.btn} onPress={alterarNome}>
        <Text style={styles.btnTexto}>
          Altera Nome
        </Text>
      </TouchableOpacity>
      <Text style={styles.texto}>{nome}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  texto: {
    color: '#322e31',
    fontSize: 40
  },
  btn: {
    backgroundColor: '#0f26e3',
    alignItems: 'center'
  },
  btnTexto: {
    color: '#ffffff'
  },
  Input: {
    fontSize: 21,
    justifyContent: 'center'

  }
});

 */