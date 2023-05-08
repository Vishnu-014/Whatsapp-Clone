import { FlatList, ScrollView, StyleSheet, Text, View, Animated, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';

import chats from '../../assets/data/chats.json'
import ChatListItem from '../components/ChatListItem'
import { useNavigation } from '@react-navigation/native'

const ChatsScreen = () => {
  const navigation = useNavigation();

  const scrollY = new Animated.Value(0);
  const [scroll, setScroll] = useState(scrollY)

  useEffect(() => {
    navigation.setOptions({
      headerTitle: scroll < 36 ? "" : 'Chats'
    })
  }, [scrollY])

  return (
    <ScrollView
      onScroll={(e) => {
        scrollY.setValue(e.nativeEvent.contentOffset.y)
        console.log(e.nativeEvent.contentOffset.y);
        setScroll(e.nativeEvent.contentOffset.y);
      }}
      scrollEventThrottle={16}
      style={{ backgroundColor: '#fff' }}
    >
      <Text style={styles.title}>Chats</Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={styles.search}
          placeholder='Search'
          placeholderTextColor={'grey'}
        />
        <Ionicons name="ios-reorder-three" size={29} color="royalblue"
          style={{ marginTop: 4, marginLeft: 6 }}
        />
      </View>
      

      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Text style={styles.text}>Broadcast List</Text>
        <Text style={[styles.text, { marginLeft: 180, }]}>New Group</Text>
      </View>
      <View style={styles.line} />

      <Pressable
        onPress={() => navigation.navigate('Archived')}
      >
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons name="archive" size={24} color="royalblue"
            style={{ marginLeft: 30, marginTop: 10 }} />

          <Text style={styles.archive}>Archived</Text>
          <Text style={styles.archiveNum}>10</Text>
        </View>
      </Pressable>
      <View style={styles.lineArchive} />

      <FlatList
        data={chats}
        renderItem={({ item }) => <ChatListItem chat={item} />}
        style={{ backgroundColor: '#fff' }}
        scrollEnabled={false}
      />
    </ScrollView>
  )
}

export default ChatsScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  search: {
    height: 30,
    width: '85%',
    backgroundColor: '#EEEDF0',
    borderRadius: 9,
    marginLeft: 20,
    marginVertical: 5,
    padding: 10,
    marginBottom: 20,
  },
  text: {
    color: 'royalblue',
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  line: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    width: '100%',
  },
  archive: {
    marginHorizontal: 10,
    marginVertical: 11,
    marginLeft: 35,
    fontSize: 20,
    fontWeight: '600'
  },
  lineArchive: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    width: '100%',
    marginLeft: 90,
    marginBottom: 10,
  },
  archiveNum: {
    marginHorizontal: 10,
    marginVertical: 11,
    marginLeft: 210,
    fontSize: 18,
    color: 'royalblue'
  }
})