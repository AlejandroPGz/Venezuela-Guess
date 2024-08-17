import React from 'react'
import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function TabLayout() {
  return (
    <SafeAreaProvider>
      <Tabs screenOptions={{
      headerShown:false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "#26252c",
      },
      tabBarActiveTintColor: "#f7f7f8",
      tabBarInactiveTintColor: "#8f8da3", 
    }}>
        <Tabs.Screen 
        name='home'
        options={
          {
            tabBarIcon:({color})=> <Entypo name="home" size={25} color={color} 
             />
          }
        }
        ></Tabs.Screen>
        <Tabs.Screen 
        name='profile'
        options={
          {
            tabBarIcon:({color})=><FontAwesome6 name="circle-user" size={25} color={color} />
          }
        }
        ></Tabs.Screen>
    </Tabs>
    </SafeAreaProvider>
  )
}