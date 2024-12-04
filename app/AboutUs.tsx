import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

export default function LenguajeScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState("Español");
  const Config = () => {
    router.replace('/ConfiguracionScreen');
  };

  const navigation = useNavigation<any>();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <TouchableOpacity onPress={Config}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Image
            source={require("../assets/images/sobrenosotros.png")}
            style={styles.headerIcon}
          />
          <Text style={styles.headerTitle}>Sobre Nosotros</Text>
        </View>
      </View>

      {/* Opciones de Lenguaje */}
      <Text style={styles.parafo}>
      En chat’in nosotros estamos dispuestos a brindarle un servicio de chat bot de inteligencia artificial del major nivel y calidad, para que por medio de este, usted pueda consultar todas sus preguntas en diferentes areas.
      </Text>
      <Text style={styles.parafo}>
      Nuestro chatbot es ideal para resolver problemas de programacion, matematicas, ciencias y muchas otras cosas.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",  // Aquí se centra el título y la imagen
    flex: 1,  // Asegura que el contenedor ocupe el espacio disponible
  },
  headerIcon: {
    width: 34,
    height: 34,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  languageOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  languageInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  languageIcon: {
    width: 34,
    height: 34,
    marginRight: 10,
  },
  languageText: {
    fontSize: 20,
    fontFamily: "Roboto",
  },
  parafo:{
    color: "#757575",
    fontSize: 16,
    fontFamily: "Roboto",
    marginTop: 20,
    marginHorizontal: 20,
  }
});