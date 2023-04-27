import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';

export default function App() {
  const [inputText, setInputText] = useState('');

  const handleButtonPress = () => {
    console.log('Texto inserido:', inputText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Esqueceu a senha
        </Text>
      </View>
      <Card style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={('https://cdn-icons-png.flaticon.com/512/1483/1483769.png')} style={styles.image} />
        </View>
        <Text style={styles.textborder}>
          Se você não nos forneceu um endereço de e-mail real ao criar a sua conta, não poderemos lhe enviar um e-mail de recuperação.
        </Text>
        <Text style={styles.text}>
          Insira seu e-mail para redefinir sua senha.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Usar número de telefone para redefinir a senha
        </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  textborder: {
    margin: 24,
    fontSize: 9.5,
    borderWidth: 1,
    borderColor: 'orange',
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 50,
  },
  text: {
    margin: 10,
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    padding: 16,
    marginHorizontal: 16,
  },
  input: {
    marginBottom: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    color: '#ccc',
  },
  button: {
    backgroundColor: 'transparent',
    padding: 5,
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
  },
  buttonText: {
    color: '#ccc',
    fontSize: 15,
  },
});
