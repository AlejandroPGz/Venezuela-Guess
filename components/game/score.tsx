import { View, Text, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { Link, Redirect, useRouter } from 'expo-router';

const Score = memo(({ correct, incorrect, index }) => (
    <>
      <Text>Correct: {correct}</Text>
      <Text>Incorrect: {incorrect}</Text>
      <Text>Index: {index + 1}</Text>

    </>
  ));
export default memo(Score);