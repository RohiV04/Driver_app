import { Button, StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native'
import React from 'react'

export default function EditProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Edit Profile Screen</Text>
      <Button title='Click here' onPress={() => alert('Hey Hii!')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})