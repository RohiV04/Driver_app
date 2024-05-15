import { Pressable, StyleSheet, View, ScrollView, Image } from 'react-native'
import React from 'react'

import { Entypo } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { Button, Avatar,Title, Text, Caption, TouchableRipple } from 'react-native-paper';
import EditProfileScreen from './EditProfileScreen';
import { SignedOut, useAuth, useUser } from '@clerk/clerk-expo'

export default function ProfileScreen() {

  const { isSignedIn, user } = useUser();
  console.log(user);
  const { isLoaded, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <ScrollView bounces={false}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Avatar.Image source={{ uri: user.imageUrl }} size={60} />
            <View style={{ marginLeft: 20 }}>
              <Title style={styles.title}>{user.lastName}</Title>
              <Caption style={styles.caption}>{user.fullName}</Caption>
            </View>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Entypo name="location" size={20} color="#777777" />
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              Chennai, India
            </Text>
          </View>
          <View style={styles.row}>
            <FontAwesome6 name="phone" size={20} color="#777777" />
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              +91 9182151467
            </Text>
          </View>
          <View style={styles.row}>
            <MaterialIcons name="email" size={20} color="#777777" />
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              {user.emailAddresses[0].emailAddress}
            </Text>
          </View>
        </View>

        <View style={styles.editProfile}>
          <Button
            mode="elevated"
            onPress={() => 'EditProfileScreen'}
            style={{
              borderRadius: 10,
              borderStyle: "dashed",
              borderColor: "#4682B4",
            }}
            rippleColor={"#4682B4"}
          >
            <View style={{ flexDirection: "row" }}>
              <Feather name="edit" size={20} color="black" />
              <Text style={{ marginLeft: 10 }}>Edit Profile</Text>
            </View>
          </Button>
        </View>

        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Feather name="settings" size={24} color="#FADA5E" />
              <Text style={styles.menuItemText}>Settings</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={signOut}>
            <View style={styles.menuItem}>
              <FontAwesome name="sign-out" size={24} color="#FADA5E" />
              <Text style={styles.menuItemText}>Sign Out</Text>
            </View>
          </TouchableRipple>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  editProfile: {
    flexDirection: "row",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
})