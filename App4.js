import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ImageBackground } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    console.log(`Username: ${username}, Email: ${email}, Senha: ${password}`);
  };

  return (
    <ImageBackground source={{ uri: 'https://assets.codepen.io/1468070/Roblox+Background.jpg' }} style={styles.background}>
          <View style={styles.container2}>    
          <Text style={styles.title}>ROBLOX</Text> 
          </View>
      <View style={styles.card}>
      <View style={styles.container}>
        <Text style={styles.text2}>CADASTRE-SE E DIVIRTA-SE!</Text>
          <View style={styles.containertext}>
          <Text style={styles.text}>Data de nascimento</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Dia"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Mês"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Ano"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={styles.containertext}>
          <Text style={styles.text}>Usuário</Text>
          </View>
          <TextInput
          style={styles.input1}
          placeholder="Não use seu nome real"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
          <View style={styles.containertext}>
          <Text style={styles.text}>Senha</Text>
          </View>
        <TextInput
          style={styles.input2}
          placeholder="Mínimo de 8 caracteres"
          value={password}
          onChangeText={(text) => setSenha(text)}
        />
          <View style={styles.containertext}>
          <Text style={styles.text}>Gênero (opcional)</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button1} onPress={handleLogin}>
              <Text style={styles.buttonText1}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handleLogin}>
              <Text style={styles.buttonText2}>Log In</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.forgotPasswordText}>Ao clicar em Cadastrar-se, você aceita os Termos de Uso 
          (incluindo a cláusula de arbitragem) e a Política de Privacidade.</Text>

          <TouchableOpacity style={styles.button3} onPress={handleLogin}>
            <Text style={styles.buttonText3}>Cadastrar-se</Text>
          </TouchableOpacity>
        </View>
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
  card: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 10,
    margin: 30,
    marginBottom: 100,
    marginTop: 100,
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    container2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
    containertext: {
    width: 230,
    alignItems: 'left',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 50,
    color: 'white',
  },
  text: {
    color: 'white',
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'column'
  },
    text2: {
    color: 'white',
    alignItems: 'Center',
    marginBottom: 30,
    flexDirection: 'column'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {
    backgroundColor: 'transparent',
    padding: 10,
    width: '30%',
    fontSize: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'grey',
    color: 'grey'
  },
  input1: {
    backgroundColor: 'transparent',
    padding: 10,
    margin: 10,
    width: '105%',
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
    width: '105%',
    fontSize: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'grey',
    color: 'grey'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
  },
  button1: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: '47%',
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonText1: {
    fontSize: 16,
    color: 'grey',
    fontWeight: '500',
  },
  button2: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: '47%',
    borderWidth: 1,
    borderColor: 'white',
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
  },
    button3: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: '55%',
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 20,
  },
  buttonText3: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 500,
  },
});
