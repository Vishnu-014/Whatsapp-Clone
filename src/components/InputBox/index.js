import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'


const index = () => {

  const [newMessage, setNewMessage] = useState('');
  const [isTyped, setIsTyped] = useState(false);

  const onSend = () => {
    console.log('send' + newMessage);

    setNewMessage('')
  }

  const onTextHandler = (text) => {
    setNewMessage(text)
  }

  return (
    <SafeAreaView style={styles.container}>
      <AntDesign name='plus' size={20} color="#1478F6"
        style={{ marginLeft: 10, }} />

      <TextInput
        style={styles.input}
        onChangeText={onTextHandler}
        value={newMessage}
      />

      <MaterialIcons onPress={onSend} style={[styles.send, { paddingLeft: 7, marginTop: 6 }]} name='send' size={16} color="white" />
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    //height: 65
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
    paddingLeft: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15,
    marginTop: 6,
    borderColor: 'lightgrey',
    borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    backgroundColor: '#1478F6',
    padding: 6,
    borderRadius: 15,
    overflow: 'hidden',
    right: 4,
  },
})