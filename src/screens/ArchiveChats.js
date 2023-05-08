import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import chats from '../../assets/data/chats.json'
import ChatListItem from '../components/ChatListItem'

const ArchiveChats = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ChatListItem chat={item} />}
      style={{ backgroundColor: '#fff' }}
      scrollEnabled={false}
    />
  )
}

export default ArchiveChats

const styles = StyleSheet.create({})