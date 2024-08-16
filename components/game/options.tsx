import { View, Text, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { Link, Redirect, useRouter } from 'expo-router';

const Options = memo(({ options, handleTouch, selected, rightId, failId }) => (
    <View className="mt-6 w-full flex-row flex-wrap rounded-xl justify-center items-center">
      {options &&
        options.map((option, index) => {
          return (
            <TouchableOpacity
              disabled={selected}
              className={`rounded-xl w-2/5 my-2 mx-2 h-20 justify-center items-center flex ${
                rightId === index ? 'bg-green-500' : failId === index ? 'bg-red-500' : 'bg-cloudy-50'
              }`}
              key={index}
              onPress={() => handleTouch(option, index)}
            >
              <Text className="text-2xl text-center w-full font-medium mx-1">{option}</Text>
            </TouchableOpacity>
          );
        })}
    </View>
  ));
export default Options;