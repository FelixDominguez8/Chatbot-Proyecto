import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles/stylesuser';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import { router } from 'expo-router';

const UserScreen = () => {
  const navigation = useNavigation<any>();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleGoBack = () => {
    router.replace('/(tabs)/home');
  };

  return (
    <View style={styles.container}>
      {/* Flecha de regreso */}
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Logo */}
      <Image
        source={require('../assets/images/logo2.jpg')}
        style={styles.logo}
      />

      {/* Imagen de perfil */}
      <Image
        source={require('../assets/images/perfil.png')}
        style={styles.profileImage}
      />

      {/* Texto debajo de la imagen */}
      <Text style={styles.userText}>Usuario</Text>

      {/* Campo de texto para nombre de usuario */}
      <TextInput
        style={styles.inputField}
        placeholder="Nombre de usuario"
        placeholderTextColor="#888"
      />

      {/* Botones */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Guardar Datos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Agregar Datos Biométricos</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserScreen;
