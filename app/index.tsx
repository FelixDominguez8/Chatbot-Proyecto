import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/styles';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const Index = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation<any>();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLoginPress = () => {
    router.replace('/(tabs)/home');
  };

  const Contra = () => {
    router.replace('/contra');
  };

  const SignUp = () => {
    router.replace('/signup');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo1.jpg')} 
        style={styles.image}
      />
      
      <View style={styles.textContainer}>
        <Text style={styles.text}>Bienvenido de vuelta</Text>
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

      <TouchableOpacity onPress={Contra}>
        <Text style={styles.link}>¿Olvidó su contraseña?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>¿No tienes cuenta? {''}</Text>
        <TouchableOpacity onPress={SignUp}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.faceIdButton}>
        <Image
          source={require('../assets/images/faceid.png')} 
          style={styles.faceIdImage}
        />
      </TouchableOpacity>

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
