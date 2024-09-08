import { View, Text, Image } from 'react-native'
import React from 'react'
const flag = require("../../assets/images/flag.png")

export default function StateCard({item}) {  

  return (
    <View className="bg-cloudy-100 mt-6 h-auto w-full rounded-2xl p-2">
    <Text className="text-xl font-bold text-cloudy-950 text-center">{item.name}</Text>
    <Image className="h-48 w-64 self-center mt-4 rounded-lg" style={{ resizeMode: 'stretch'}} source={{uri:item.image}}></Image>
    <Text className="w-full text-lg font-bold text-cloudy-950 mt-2 text-left">Capital: <Text className="text-cloudy-950 font-medium">{item.capital}</Text></Text>
    <Text className="w-full text-lg font-bold text-cloudy-950 mt-2 text-left">Ubicación: <Text className="text-cloudy-950 font-medium">{item.location}</Text></Text>
    {/* <Text className="w-full text-lg font-bold text-cloudy-950 mt-2 text-left">Turismo: <Text className="text-cloudy-950 font-medium">{item.tourism}</Text></Text>
    <Text className="w-full text-lg font-bold text-cloudy-950 mt-2 text-left">Clima: <Text className="text-cloudy-950 font-medium">{item.weather}</Text></Text>
    <Text className="w-full text-lg font-bold text-cloudy-950 mt-2 text-left">Relieve: <Text className="text-cloudy-950 font-medium">{item.relief}</Text></Text>
    <Text className="w-full text-lg font-bold text-cloudy-950 mt-2 text-left">Fauna y flora: <Text className="text-cloudy-950 font-medium">{item.fauna_and_flora}</Text></Text> */}
  </View>
);
}