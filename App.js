import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import * as eva from '@eva-design/eva';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';


export default function App() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    <View style={styles.container}>
      <View View style={styles.inputView}> 
        <TextInput
          style={styles.TextInput}
          placeholder="Email or Number Phone."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View>
      
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} category='h1'
        >LOGIN</Text> 
      </TouchableOpacity>

    </View>
  </ApplicationProvider>
    
  );
}

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    backgroundColor: "#b6e8f3f0",
    borderRadius: 30,
    width: "80%",
    height: 50,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    //flex: 1,
    padding: 10,
    //marginLeft: 20,

  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn:
  {
    width:"60%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#25a2d3f0",
  }
});
