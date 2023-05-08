import { Animated, FlatList, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import bg from '../../assets/images/BG.png'
import messages from '../../assets/data/messages.json'
import Message from '../components/Message'
import InputBox from '../components/InputBox'
import { useNavigation, useRoute } from '@react-navigation/native'


const ChatScreen = () => {

  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name])


  //console.log(route.params);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 90}
      style={styles.bg}>
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          style={styles.list}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView >
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  }
})