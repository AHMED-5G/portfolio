import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AccountTab } from './AccountTab'
import { ChatTab } from './ChatTab'
import { ScanTab } from './ScanTab'

type Props = {}

const RightTabComponent = (props: Props) => {
  return (
    <View style={{ marginTop: 5, marginRight: 5 }}>
    <ScanTab isFocused={false} label={"scan"} />
    <ChatTab isFocused={false} label={"chat"} />
    <AccountTab isFocused={false} label={"account"} />
  </View>
  )
}

export default RightTabComponent

const styles = StyleSheet.create({})