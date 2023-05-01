import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

type Props = {}

const Cart = (props: Props) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: 48,
        height: 48,
        marginLeft: 10,
      }}
    >
      <AntDesign name="shoppingcart"  size={38} color="black" />
    </TouchableOpacity>
  )
}

export default Cart

const styles = StyleSheet.create({})