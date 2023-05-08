import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);


const index = ({ chat }) => {

  const navigation = useNavigation();
  //console.log(chat);

  return (
    <Pressable onPress={() => navigation.navigate('Chat', { id: chat.id, name: chat.user.name })} style={styles.container}>
      <Image
        source={{ uri: chat.user.image }}
        style={styles.image}
      />

      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>{chat.user.name}</Text>
          <Text style={styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow()}</Text>
        </View>
        <Text numberOfLines={2} style={styles.subTitle}>{chat.lastMessage.text}</Text>
      </View>
    </Pressable>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 5,
    height: 70
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 10
  },
  content: {
    flex: 1,
    //backgroundColor: 'red',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  name: {
    flex: 1,
    fontWeight: 'bold'
    // backgroundColor: 'green'
  },
  subTitle: {
    color: 'grey',
  },
})