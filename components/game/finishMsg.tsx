import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

const FinishMsg = ({ level, correct, incorrect, name }) => {
    const router = useRouter();
    
    return (
    <View className="bg-cloudy-300 p-8 rounded-lg justify-center gap-2">
    <Text className="text-center font-medium text-2xl text-cloudy-950">{correct > 6 ? "¡Felicidades!" : "¡Intentalo de nuevo!"}</Text>
    <View className="flex-row justify-center items-center gap-2">
    <Text className="text-cloudy-950 font-medium text-lg">Acertadas: {correct}</Text>
    <FontAwesome name="check-circle-o" size={24} color="green" />
    </View>
    <View className="flex-row justify-center items-center gap-2">
    <Text className="text-cloudy-950 font-medium text-lg">Errores: {incorrect}</Text>
    <FontAwesome name="times-circle" size={24} color="red" />
    </View>
    <TouchableOpacity
    className="bg-cloudy-50 px-4 justify-center items-center py-2 rounded-3xl"
    onPress={() => {        
        switch (name) {
            case name = "name":
            if (Number(level) === 1) {
            router.replace("/game/guess/1?gameMode=name");
            } else router.replace("/game/guess/2?gameMode=name");
            break;
            case name = "capital":
            if (Number(level) === 1) {
            router.replace("/game/guess/1?gameMode=capital");
            } else router.replace("/game/guess/2?gameMode=capital");
        }
    }}
    >
        <Text className="text-lg font-medium text-cloudy-950">Comenzar de nuevo</Text>
    </TouchableOpacity>
    <TouchableOpacity
    className="bg-cloudy-50 px-4 justify-center items-center py-2 rounded-3xl"
    onPress={() => router.back()}
    >
        <Text className="text-lg font-medium text-cloudy-950">Menu</Text>
    </TouchableOpacity>  
    </View>
    )
  };
export default FinishMsg;