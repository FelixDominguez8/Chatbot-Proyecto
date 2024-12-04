import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import HistoryItem from "../../components/ui/HistoryItem";

const History: React.FC = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Historial</Text>
      <View>
        <Text style={styles.sectionTitle}>Hoy</Text>
        <HistoryItem text="Que es la prueba de turing" />
        <HistoryItem text="Como hacer pruebas de hipotesis" />
      </View>
      <View>
        <Text style={styles.sectionTitle}>Ayer</Text>
        <HistoryItem text="Como instalar LLVM en Windows" />
        <HistoryItem text="Como hacer wireframing en figma" />
      </View>
      <View>
        <Text style={styles.sectionTitle}>Hace una semana</Text>
        <HistoryItem text="Cual es la cuidad mas segura" />
        <HistoryItem text="Receta para sopa de res" />
      </View>
      <View>
        <Text style={styles.sectionTitle}>Hace un mes</Text>
        <HistoryItem text="Debian en virtualbox" />
        <HistoryItem text="Problemas con cmd" />
      </View>
      {/* Espacio al final */}
      <View style={styles.footerSpacing} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  contentContainer: {
    paddingBottom: 40, // Espacio al final del contenido
  },
  title: {
    paddingTop: 40,
    fontSize: 24,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
  },
  footerSpacing: {
    height: 20, // Espacio adicional al final
  },
});

export default History;
