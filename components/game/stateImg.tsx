import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { memo } from 'react'
import { Link, Redirect, useRouter } from 'expo-router';
const flag = require("../../assets/images/flag.png")

const StateImg = memo(({ currentState }) => (
    <View className="w-full h-1/4 justify-center items-center mt-4">
      <Image className="h-full w-4/5 ml-4" style={{ resizeMode: 'cover' }} source={flag} />
      <Text>{currentState.name}</Text>
    </View>
  ));
export default memo(StateImg);