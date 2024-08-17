import { View, Text, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { Link, Redirect, useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Score = memo(({ correct, incorrect, index }) => (
    <View className="w-full flex-row justify-between items-center px-4 py-2">
      <FontAwesome name="check-circle-o" size={24} color="green" />
      <Text className="text-lg font-medium">{correct}</Text>
      <FontAwesome name="times-circle" size={24} color="red" />
      <Text className="text-lg font-medium">{incorrect}</Text>
      <Text className="text-lg font-medium">{index + 1} / 12 </Text>

    </View>
  ));
export default memo(Score);