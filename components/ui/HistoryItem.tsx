import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface HistoryItemProps {
  text: string;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ text }) => {
  return (
    <TouchableOpacity>
      <View style={styles.itemContainer}>
        <Image
            source={require('../../assets/images/HistorialImagen.png')}
            style={{height: 25, width: 25, paddingRight: 10}} 
          />
        <Text style={styles.text}>{"  "+text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "#f7f7f7",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});

export default HistoryItem;
