import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import StateCard from '@/components/wiki/stateCard'
const flag = require("../../assets/images/flag.png")

export default function Wiki() {

    const router = useRouter();
    const [states, setStates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState(null)  

    const getStates = async () => {
      function SortArray(x, y) {
        return x.name.localeCompare(y.name);
      }
        const resp = await fetch("https://venezuela-api.onrender.com/api/states/66ae80a80a3590155ccae9ee/allStates/venezuela/");
        const data = await resp.json();
        //console.log(data[0]);
        data.sort(SortArray);
        setStates(data)
        setLoading(false);
    }
    
    useEffect(() => {
      getStates()
    }, [])

    const handleSearch = async (value) => {
      if (value.trim().length > 0) {
        const search = states.filter(country => country.name.toLowerCase().startsWith(value.toLowerCase( )))
        setSearch(search)        
      } else setSearch(false)
    }

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
        onChangeText={handleSearch} 
        placeholder='Miranda' 
        className="border-input rounded-lg py-3 px-4 shadow-xl shadow-black bg-white mt-2"></TextInput>
      </View>


      {loading&&
      <ActivityIndicator className="mt-6" size="large" color="#26252c" />}

      {states&&!search && 
    //   <FlatList
    //   data={states}
    //   renderItem={({item}) => <StateCard item={item} />}
    //   keyExtractor={item => item.id}
    // />
    states.map((state)=> (
      <StateCard item={state} key={state.id}></StateCard>
    ))
      }

      {search &&
       search.map((state)=> (
        <StateCard item={state} key={state.id}></StateCard>
      ))
      }

      {/* {states.map((state)=> (
        <StateCard item={state} key={state.id}></StateCard>
      ))} */}

      </ScrollView>
    </SafeAreaView>
  )
}