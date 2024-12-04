import React from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import styles from '../styles/styleshome';
import { router } from 'expo-router';

const Home = () => {
  const handlePress = (item: string) => {
    console.log(`Presionaste: ${item}`);
  };

  const handleLoginPress = () => {
    router.replace('/');
  };

  const redirectUser = () => {
    router.replace('/usuario');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logo2.jpg')}
          style={styles.logo}
        />
        <TouchableOpacity style={styles.profileButton} onPress={redirectUser}>
          <Image
            source={require('../../assets/images/perfil.png')} 
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>Hola, usuario</Text>
        <Text style={styles.subText}>¿En qué te puedo ayudar hoy?</Text>
      </View>

      <TouchableOpacity style={styles.chatButton} onPress={handleLoginPress}>
        <Text style={styles.chatButtonText}>Nuevo Chat</Text>
      </TouchableOpacity>

      <View style={styles.historyHeader}>
        <Text style={styles.greetingText}>Historial</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>Ver todos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.carruselHeader}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.carousel}
          contentContainerStyle={styles.carouselContent}
        >
          {['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4', 'Elemento 6'].map((item, index) => (
            <TouchableOpacity key={index} style={styles.carouselItem}>
              <Text style={styles.carouselItemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.promptsHeader}>
        <Text style={styles.greetingText}>Prompts Sugeridos</Text>
      </View>

      {['Prompt 1', 'Prompt 2', 'Prompt 3', 'Prompt 4', 'Prompt 5'].map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.suggestedButton}
        >
          <Text style={styles.suggestedButtonText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Home;

