import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, TouchableOpacity} from 'react-native'
import Logo from '../../assets/images/logo.png';
import CustomInputs from '../components/CustomInputs/CustomInputs';
import Buttons from '../components/Buttons/Buttons';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const {height} = useWindowDimensions();
    const navigation = useNavigation();
    
    const onLoginPressed = () => {
        // Validate user
        navigation.navigate('Dashboard');
    }

    const onForgotPasswordPressed = () => {
        console.warn('onForgotPasswordPressed');
    }

    const onSignUpPressed = () => {
        console.log('onSignUpPressed');
        navigation.navigate('SignUp');
    }

  return (

    <View style={styles.root}>
      <Image source={Logo} 
      style={[styles.Logo, {height: height * 0.30}]} 
      resizeMode='contain'>
      </Image>

      <CustomInputs 
      placeholder="Username" 
      value={username} 
      setValue={setUsername}
       
      />

      <CustomInputs 
      placeholder="Password" 
      value={password} 
      setValue={setPassword}
      secureTextEntry = {true}
      />

      <TouchableOpacity>
          <Text style = {styles.text} onPress={onForgotPasswordPressed}>Forgot Password?</Text> 
      </TouchableOpacity>

      <Buttons text="Login" onPress={onLoginPressed}/>

      <TouchableOpacity>
          <Text style = {styles.text}>Don't have an account? <Text style={styles.link} onPress={onSignUpPressed}> Sign Up </Text>
          </Text> 
      </TouchableOpacity>

    
    </View>
  );
}

const styles = StyleSheet.create({
    root: {
        alignItems:'center',
        padding: 20,
    },
    Logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
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

export default LoginScreen;