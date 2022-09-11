import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import CustomInputs from '../components/CustomInputs/CustomInputs';
import Buttons from '../components/Buttons/Buttons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    
    const navigation = useNavigation();

    const onRegisterPressed = () => {
        console.warn('onRegisterPressed');
    }

    const onLoginPressed = () => {
      navigation.navigate('Login');
    }

  return (

    <View style={styles.root}>
      <Text style={styles.title}>
        Create New Account
      </Text>

      <CustomInputs 
      placeholder="Username" 
      value={username} 
      setValue={setUsername}
      />

      <CustomInputs 
      placeholder="Email" 
      value={email} 
      setValue={setEmail} 
      />

      <CustomInputs 
      placeholder="Password" 
      value={password} 
      setValue={setPassword}
      secureTextEntry = {true}
      />

      <CustomInputs 
      placeholder="Confirm Password" 
      value={passwordConfirm} 
      setValue={setPasswordConfirm}
      secureTextEntry = {true}
      />

      <Buttons text="Register" onPress={onRegisterPressed}/>

      <TouchableOpacity>
          <Text style = {styles.text}>Already have an account?<Text style={styles.link} onPress={onLoginPressed}> Login </Text>
          </Text> 
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems:'center',
        padding: 20,
    },

    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#051C60',
      margin: 25,

    }, 

    text: {
      color: "black",
      padding: 10,
    },

    link: {
        fontWeight: 'bold',
        color: 'blue',
    },
})

export default SignUpScreen;