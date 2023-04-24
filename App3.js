import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ImageBackground } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password] = useState('');

  const handleLogin = () => {
    console.log(`Email: ${email}, Senha: ${password}`);
  };

  return (
    <ImageBackground source={{ uri: 'https://assets.codepen.io/1468070/Roblox+Background.jpg' }} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>ROBLOX</Text>
        <TextInput
          style={styles.input1}
          placeholder="Username/Email/Phone"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input2}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setSenha(text)}
        />
        <TouchableOpacity style={styles.button1} onPress={handleLogin}>
          <Text style={styles.buttonText1}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handleLogin}>
          <Text style={styles.buttonText2}>Log In With Another Device</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Passoword or Username?</Text>
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
  input1: {
    backgroundColor: 'transparent',
    padding: 10,
    margin: 10,
    width: '80%',
    fontSize: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'grey',
    color: 'grey'
  },
    input2: {
    backgroundColor: 'transparent',
    padding: 10,
    margin: 10,
    width: '80%',
    fontSize: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'grey',
    color: 'grey'
  },
  button1: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    width: '80%',
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonText1: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 500,

  },
    button2: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
    margin: 10,
    width: '80%',
    borderWidth: 1,
    borderColor: 'grey',
  },
  buttonText2: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 500,
  },
  forgotPasswordText: {
    marginTop: 10,
    color: 'white',
    fontSize: 10,
  }
});
