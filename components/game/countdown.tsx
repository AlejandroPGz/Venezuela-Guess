import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Countdown({startTime, setStartTime, finished, setFinished}) {

    const [timeLeft, setTimeLeft] = useState(6);
    useEffect(() => {
        
        const timer = setTimeout(() => {
            if (startTime && timeLeft > 0) {
                setTimeLeft(timeLeft - 1)
            } else {
                setFinished(true)
            }
        }, 1000);

        return () => clearInterval(timer)
    
    }, [startTime, timeLeft])
    
  return (
    <>
    <Text className="text-3xl font-medium">00:{timeLeft}</Text>
    </>
  )
}