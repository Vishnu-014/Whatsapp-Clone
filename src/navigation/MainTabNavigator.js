import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import NotImplementedScreen from '../screens/NotImplementedScreen';
import ChatsScreen from '../screens/ChatsScreen';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {

  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "whitesmoke" },
        headerStyle: { backgroundColor: "whitesmoke" },
      }}
      initialRouteName='Chats'
    >
      <Tab.Screen name="Status" component={NotImplementedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="circle-notch" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Calls" component={NotImplementedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Communities" component={NotImplementedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="users" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Chats" component={ChatsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-chatbubbles-sharp" size={size} color={color} />
          ),
          headerRight: () => (
            <>
              <View style={{ flexDirection: 'row' }}>
                <Ionicons name="camera-outline"
                  size={25}
                  color={"royalblue"}
                  style={{ marginRight: 30 }}
                  onPress={() => navigation.navigate('Camera')}
                />
                <Entypo
                  name="new-message"
                  size={20}
                  color={"royalblue"}
                  style={{ marginRight: 15, marginTop: 3 }}
                />

              </View>
            </>
          ),
          headerLeft: () => (
            <Text style={
              {
                color: "royalblue",
                fontSize: 20,
                marginLeft: 20,
              }}>Edit</Text>
          )
        }}
      />
      <Tab.Screen name="Settings" component={NotImplementedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTabNavigator

const styles = StyleSheet.create({})