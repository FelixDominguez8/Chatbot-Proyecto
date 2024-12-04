import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { router } from 'expo-router';
import CustomPopup from "../DeleteChat";

export default function ConfiguracionScreen() {
  const Lenguaje = () => {
    router.replace('/SeleccionLenguajeScreen');
  };

  const Tema = () => {
    router.replace('/ThemeScreen');
  };

  const [modalVisible, setModalVisible] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
    setModalVisible(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalVisible(false);
  };

  // Función para confirmar la acción (Sí)
  const handleConfirm = () => {
    console.log("Chats borrados");
    closeModal();  // Cierra el modal después de la confirmación
  };

  const Sobrenosotros = () => {
    router.replace('/AboutUs');
  };

  const Privacidad = () => {
    router.replace('/PrivacyScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>

      <TouchableOpacity style={styles.option} onPress={Lenguaje}>
        <Image
          source={require('../../assets/images/Lenguaje.png')} 
          style={{width: 24, height: 24}}
        />
        <Text style={styles.optionText}>Lenguaje</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={Tema}>
        <Image
          source={require('../../assets/images/tema.png')} 
          style={{width: 24, height: 24}}
        />
        <Text style={styles.optionText}>Tema</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={openModal}>
        <Image
          source={require('../../assets/images/borrar.png')} 
          style={{width: 24, height: 24}}
        />
        <Text style={styles.optionText}>Borrar todos los chats</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity style={styles.option} onPress={Sobrenosotros}>
        <Image
          source={require('../../assets/images/sobrenosotros.png')} 
          style={{width: 24, height: 24}}
        />
        <Text style={styles.optionText}>Sobre Nosotros</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={Privacidad}>
        <Image
          source={require('../../assets/images/privacidad.png')} 
          style={{width: 24, height: 24}}
        />
        <Text style={styles.optionText}>Privacidad</Text>
      </TouchableOpacity>
      <CustomPopup
        visible={modalVisible}
        onClose={closeModal}
        onConfirm={handleConfirm}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 40,
    marginLeft: 15,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#5500FF",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
    height: 44,
    width: 322, 
    alignSelf: "center", 
  },
  optionText: {
    color: "white",
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "black",
    width: 273,
    marginVertical: 20,
    alignSelf: "center",
  },
});


