import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ImageBackground } from 'react-native';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';

export default function App() {
  const [email] = useState('');
  const [password] = useState('');

  const handleLogin = () => {
    console.log(`Email: ${email}, Senha: ${password}`);
  };

  return (
    <ImageBackground source={{ uri: 'https://assets.codepen.io/1468070/Roblox+Background.jpg' }} style={styles.background}>
      <View style={styles.container}>
       <App2/>

       <App3/>
        
       <App4/>
        
       <App5/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
    width: '80%'
  },
  buttonText1: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button2: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
    margin: 10,
    width: '80%',
    borderWidth: 1,
    borderColor: 'white'
  },
  buttonText2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  forgotPasswordText: {
    marginTop: 10,
    color: 'lightblue',
  }
});
