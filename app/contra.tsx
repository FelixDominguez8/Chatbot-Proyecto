import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles/styles';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const Index = () => {
  const navigation = useNavigation();

  const login = () => {
    router.replace('/');
  };

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
        <Text style={styles.text}>Recuperacion de contraseña</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
        />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Mandar correo</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>¿Ya tienes cuenta? {''}</Text>
        <TouchableOpacity onPress={login}>
          <Text style={styles.link}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;
