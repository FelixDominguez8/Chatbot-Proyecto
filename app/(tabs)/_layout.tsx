import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Text, Image } from 'react-native';
import { HapticTab } from '@/components/HapticTab';


export default function TabLayout() {


  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/homeselected.png')
                  : require('../../assets/images/home.png')
              }
              style={{ width: 24, height: 24 }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Inter', // Asegúrate de tener esta fuente disponible
                color: focused ? '#000' : '#757575',
                fontWeight: focused ? 'bold' : 'normal',
              }}
            >
              Inicio
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat de IA',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/chatselected.png')
                  : require('../../assets/images/chat.png')
              }
              style={{ width: 24, height: 24 }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Inter',
                color: focused ? '#000' : '#757575',
                fontWeight: focused ? 'bold' : 'normal',
              }}
            >
              Chat de IA
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="HistorialScreen"
        options={{
          title: 'Historial',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/historialselected.png')
                  : require('../../assets/images/historial.png')
              }
              style={{ width: 24, height: 24 }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Inter',
                color: focused ? '#000' : '#757575',
                fontWeight: focused ? 'bold' : 'normal',
              }}
            >
              Historial
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="ConfiguracionScreen"
        options={{
          title: 'Configuración',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/configuracionselected.png')
                  : require('../../assets/images/configuracion.png')
              }
              style={{ width: 24, height: 24 }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Inter',
                color: focused ? '#000' : '#757575',
                fontWeight: focused ? 'bold' : 'normal',
              }}
            >
              Configuración
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}

