import { View, Text } from 'react-native'
import React from 'react'
import { Modal as RNModal, ModalProps } from "react-native";

type PROPS = ModalProps & {
    isOpen: boolean,
    withInput?: boolean
}


export default function Modal({isOpen, withInput, children, ...rest}: PROPS) {
  return (
    <RNModal 
    visible={isOpen}
    transparent
    animationType='fade'
    statusBarTranslucent
    {...rest}
    >
        <View className="items-center justify-center flex-1 px-3 blur-lg w-screen h-screen bg-cloudy-1000">
            { children }
        </View>
    </RNModal>
  )
}