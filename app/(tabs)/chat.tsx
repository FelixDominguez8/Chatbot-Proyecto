import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import styles from '../styles/styleschat';

const ChatScreen = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      // Agregar mensaje del usuario
      setMessages((prev) => [...prev, { sender: 'user', text: input }]);

      // Respuesta automática
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Después te vamos a atender' },
      ]);

      setInput(''); // Limpiar el input
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../assets/images/logo2.jpg')}
        style={styles.logo}
      />

      {/* Línea divisoria */}
      <View style={styles.divider}></View>

      {/* Área de chat */}
      <ScrollView style={styles.chatArea} contentContainerStyle={{ paddingBottom: 20 }}>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={[styles.messageBubble, msg.sender === 'user' ? styles.userBubble : styles.botBubble]}
          >
            {msg.sender === 'bot' && (
              <Image source={require('../../assets/images/logo3.jpg')} style={styles.botLogo} />
            )}
            <Text style={styles.messageText}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Input y botón de enviar */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enviale un mensaje a Chat'In"
          value={input}
          onChangeText={setInput}
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <ImageBackground
            source={require('../../assets/images/circulo.png')}
            style={styles.sendButton}
            resizeMode="contain"
          >
            <Image
              source={require('../../assets/images/send.png')}
              style={styles.sendIcon}
              resizeMode="contain"
            />
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
