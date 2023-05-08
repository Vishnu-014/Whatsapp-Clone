import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatScreen from '../screens/ChatScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ChatsScreen from '../screens/ChatsScreen'
import MainTabNavigator from './MainTabNavigator'
import ArchiveChats from '../screens/ArchiveChats'
import CameraScreen from '../screens/CameraScreen'

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer screenOptions={{
      headerStyle: { backgroundColor: "whitesmoke" },
    }}>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={MainTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Archived" component={ArchiveChats} options={{
          headerRight: () => (
            <Text style={
              {
                color: "royalblue",
                fontSize: 20,
                marginLeft: 20,
              }}>Edit</Text>
          )
        }} />
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})