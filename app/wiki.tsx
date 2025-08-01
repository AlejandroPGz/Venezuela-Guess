import { View, Text, TextInput, Image, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import StateCard from '@/components/wiki/stateCard'
import { StatesContext } from '@/context/countriesContext'
import LoaderGame from '@/components/game/loaderGame'
const flag = require("../assets/images/flag.png")

export default function Wiki() {
  
    const { states, initializing } = useContext(StatesContext);    
    const router = useRouter();
    
    const [search, setSearch] = useState(null)  
    const handleSearch = async (value) => {
      if (value.trim().length > 0) {
        const search = states.filter(country => country.name.toLowerCase().startsWith(value.toLowerCase( )))
        setSearch(search)        
      } else setSearch(false)
    };
    function SortArray(x, y) {
      return x.name.localeCompare(y.name);
    };

    if (states) {
      states.sort(SortArray);
    }

  return (
    <>
      {initializing&&
      <LoaderGame/>}
    <SafeAreaView className="w-full h-full bg-scarpa-flow-50 px-4 mt-2 mb-4">
        <ScrollView className="mb-4">
      <Text className="text-4xl font-semibold text-cloudy-950 mt-8">Wiki</Text>
      <View className="mt-6 flex-row items-center w-full">
        <Text className="text-3xl font-medium  text-cloudy-900">Venezuela</Text>
        <Image className="h-12 w-14 ml-4" style={{ resizeMode: 'cover'}} 
        source={flag}
        ></Image>
      </View>
      
      <Text className="text-xl font-medium mt-3 text-cloudy-900">La República Bolivariana de Venezuela, se divide política y administrativamente en 23 estados, el Distrito Capital y un conjunto de islas que conforman las dependencias federales.</Text>
      <Text className="text-xl font-medium mt-2 text-cloudy-900">Esta guía sigue un orden alfabético, si desea buscar alguno en específico puede escribirlo en el siguiente campo.</Text>
      <View className="mt-2">
        <Text className="text-xl font-medium">Estado</Text>
        <TextInput
        onChangeText={handleSearch} 
        placeholder='Miranda' 
        className="border-input rounded-lg py-3 px-4 shadow-xl shadow-black bg-white mt-2"></TextInput>
      </View>

      {states&&!search && 
    states.map((state)=> (
      <StateCard item={state} key={state.id}></StateCard>
    ))
      }
      
      {search &&
       search.map((state)=> (
        <StateCard item={state} key={state.id}></StateCard>
      ))
      }
      </ScrollView>
    </SafeAreaView>
    </>
  )
}