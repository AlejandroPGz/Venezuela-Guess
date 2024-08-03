import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
const flag = require("../../assets/images/flag.png")

export default function Wiki() {

    const router = useRouter();
    const [states, setStates] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const getStates = async () => {
        const resp = await fetch("https://venezuela-api.onrender.com/api/states/66ae80a80a3590155ccae9ee/allStates/venezuela/");
        const data = await resp.json();
        //console.log(data[0]);
        setStates(data);
        setLoading(false);
    }
    
    useEffect(() => {
      getStates()
    }, [])
    const item = 
        {
            "name": "Amazonas",
            "capital": "Puerto Ayacucho",
            "location": "Region Guayana",
            "tourism": "Este estado cuenta con selvas y sabanas a lo largo de su territorio, por lo que es perfecto para conectar con la naturaleza, cuenta con diversos puntos de interés como 'El Tobogán de la selva', 'La piedra del cocuy', 'Cerro Autana' entre otros.",
            "weather": "Tropical lluvioso de selva, sin estación seca definida. Temperaturas medias de 28°C con precipitaciones durante todo el año.",
            "relief": "Relieve muy variado, comenzando por sabanas hasta elevadas mesetas propias del escudo Guayanes denominadas 'tepuyes'",
            "fauna_and_flora": "Gracias a las altas precipitaciones se puede encontrar una densa formación selvática, por lo que gran parte del estado, está cubierto por inmensas selvas, aunque también cuenta con sabanas de suelos secos y sabanas de suelos húmedos. La rica fauna de la región está representada por numerosos especímenes de mamíferos, reptiles, peces y aves, entre ellos: puma, jaguar, oso palmero, morrocoy, culebras, piraña, bagre, gavilán, guacamaya...",
            "id": "65e08e622c09cf31e8c11e77"
        }

    const renderItem = ( item ) => {
        console.log(item, "item");

        // const renderText = (title, value) => {
        //     return (
        //         <Text className="w-full text-lg font-bold text-cloudy-950 mt-2 text-left">{title}: <Text className="text-cloudy-950 font-medium">{value}</Text></Text>

        //     )
        // }
        
        return (
            <View className="bg-cloudy-100 mt-6 h-auto w-full rounded-2xl p-2">
            <Text className="text-xl font-bold text-cloudy-950 text-center">{item.name}</Text>
            <Image className="h-40 w-64 self-center mt-4 rounded-lg" style={{ resizeMode: 'cover'}} source={flag}></Image>
            <Text className="w-full text-lg font-bold text-cloudy-950 mt-2 text-left">Capital: <Text className="text-cloudy-950 font-medium">{item.capital}</Text></Text>
            <Text className="w-full text-lg font-bold text-cloudy-950 mt-2 text-left">Ubicación: <Text className="text-cloudy-950 font-medium">{item.location}</Text></Text>
            <Text className="w-full text-lg font-bold text-cloudy-950 mt-2 text-left">Turismo: <Text className="text-cloudy-950 font-medium">{item.tourism}</Text></Text>
            <Text className="w-full text-lg font-bold text-cloudy-950 mt-2 text-left">Clima: <Text className="text-cloudy-950 font-medium">{item.weather}</Text></Text>
            <Text className="w-full text-lg font-bold text-cloudy-950 mt-2 text-left">Relieve: <Text className="text-cloudy-950 font-medium">{item.relief}</Text></Text>
            <Text className="w-full text-lg font-bold text-cloudy-950 mt-2 text-left">Fauna y flora: <Text className="text-cloudy-950 font-medium">{item.fauna_and_flora}</Text></Text>

          </View>
        );
      };

  return (
    <SafeAreaView className="w-full h-full bg-scarpa-flow-50 px-4 mt-2 mb-4">
        <ScrollView className="mb-4">
      <TouchableOpacity>
        <Ionicons 
        onPress={() => router.push("/home")}
        style={{marginTop: 10}} name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <Text className="text-4xl font-semibold text-cloudy-950 mt-8">Wiki</Text>
      <View className="mt-6 flex-row items-center w-full">
        <Text className="text-3xl font-medium  text-cloudy-900">Venezuela</Text>
        <Image className="h-12 w-14 ml-4" style={{ resizeMode: 'cover'}} source={flag}></Image>
      </View>
      
      <Text className="text-xl font-medium mt-3 text-cloudy-900">La República Bolivariana de Venezuela, se divide política y administrativamente en 23 estados, el Distrito Capital y un conjunto de islas que conforman las dependencias federales.</Text>
      <Text className="text-xl font-medium mt-2 text-cloudy-900">Esta guía sigue un orden alfabético, si desea buscar alguno en específico puede escribirlo en el siguiente campo.</Text>
      <View className="mt-2">
        <Text className="text-xl font-medium">Estado</Text>
        <TextInput 
        placeholder='Miranda' className="border-input rounded-lg py-3 px-4 shadow-xl shadow-black bg-white mt-2"></TextInput>
      </View>
      {renderItem(item)}
      
      </ScrollView>
    </SafeAreaView>
  )
}