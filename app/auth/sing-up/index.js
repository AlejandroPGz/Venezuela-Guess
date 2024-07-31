import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SingUp() {

  const insets = useSafeAreaInsets();


  return (
    <View className="w-screen h-screen bg-scarpa-flow-100" style={{  paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Text>Sing up</Text>
    </View>
  )
}