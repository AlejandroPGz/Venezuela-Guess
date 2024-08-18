import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { memo } from 'react'
import { Link, Redirect, useRouter } from 'expo-router';
const flag = require("../../assets/images/flag.png")

const StateImg = memo(({ currentState }) => (
    <View className="w-full h-1/3 justify-center items-center mt-4">
      <Image className="h-full w-4/5" style={{ resizeMode: 'stretch' }} source={{uri:currentState.image}} />
    </View>
  ));
export default memo(StateImg);