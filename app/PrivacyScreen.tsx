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
            source={require("../assets/images/privacidad.png")}
            style={styles.headerIcon}
          />
          <Text style={styles.headerTitle}>Privacidad</Text>
        </View>
      </View>

      {/* Opciones de Lenguaje */}
      <Text style={styles.parafo}>
      Siendo este un chat bot de inteligencia artificial, este utilizara los mensajes que usted envie, para entrenar al modelo de inteligencia artifical, para de esta manera brindarle a usted una mejor experiencia, para que el chatbot se adapte a lo que le envie. 
      </Text>
      <Text style={styles.parafo}>
      Por ello se les he recomendado de que tome muy en cuenta las cosas que envie al chatbot ya que todo esto sera supervisado.
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