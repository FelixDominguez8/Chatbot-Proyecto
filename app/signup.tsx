import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/styles';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const Index = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const login = () => {
    router.replace('/');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo1.jpg')} 
        style={styles.image}
      />
      
      <View style={styles.textContainer}>
        <Text style={styles.text}>Crea tu cuenta</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
        />
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Contraseña"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
            <Ionicons 
              name={passwordVisible ? 'eye-off' : 'eye'} 
              size={24} 
              color="gray" 
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Sign up</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>¿Ya tienes cuenta? {''}</Text>
        <TouchableOpacity onPress={login}>
          <Text style={styles.link}>Log in</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={require('../assets/images/facebook.png')} 
          style={styles.socialImage1}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={require('../assets/images/google.png')} 
          style={styles.socialImage2}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Index;
