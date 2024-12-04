// CustomPopup.tsx
import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";

// Define el tipo de las props
interface CustomPopupProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function CustomPopup({
  visible,
  onClose,
  onConfirm,
}: CustomPopupProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>¿Desea borrar todos los chats?</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={onConfirm}>
              <Text style={styles.buttonText}>Sí</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 224,
    height: 269,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 40
  },
  buttonsContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  button: {
    width: 109,
    height: 39,
    backgroundColor: "#5500FF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

