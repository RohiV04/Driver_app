import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../Pages/HomeScreen'
import ProfileScreen from '../Pages/ProfileScreen'
import Colors from '../Utils/Colors'

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EditProfileScreen from '../Pages/EditProfileScreen'

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator()

const Tab = createBottomTabNavigator()
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY
    }}> 
      <Tab.Screen name='HomeScreen' component={HomeStackScreen} options={{
        tabBarIcon:({color,size})=> (
          <Ionicons name="compass-outline" size={24} color="black" />
        )
      }}/>
      <Tab.Screen name='ProfileScreen' component={ProfileStackScreen} options={{
        tabBarIcon:({color,size})=> (
          <Ionicons name="person-sharp" size={24} color={color} />
        )
      }}/>
    </Tab.Navigator>
  )
}

const HomeStackScreen = ({navigation}) => {
  return(
    <HomeStack.Navigator 
     screenOptions={{
      headerStyle: {
        backgroundColor: '#FADA5E',
        elevation: 1,
      }
     }}
    >
    <HomeStack.Screen
     name='Home'
     component={HomeScreen}
     options={{
      title: 'Home',
      headerTitleAlign: 'center',
     }}
    />
      
    </HomeStack.Navigator>
  )
}

const ProfileStackScreen = ({navigation}) => {
  return(
    <ProfileStack.Navigator 
     screenOptions={{
      headerStyle: {
        backgroundColor: '#FADA5E',
        elevation: 0,
      }
     }}
    >
    <ProfileStack.Screen
     name='Profile'
     component={ProfileScreen}
     options={{
      title: '',
      headerLeft: () => (
        <View style={{marginLeft: 10}} >
          <Ionicons name="menu-outline" size={40} color="black"  
           onPress={() => navigation.navigate('HomeScreen')}
          />
        </View>
      ),
      headerRight: () => (
        <View style={{marginRight: 10}}>
          <MaterialCommunityIcons 
            name="account-edit" 
            size={36} 
            color="black"
            onPress={() => navigation.navigate('EditProfile')} />
        </View>
      )
     }}
    />
    <ProfileStack.Screen 
     name='EditProfile'
     options={{
      title: 'Edit Profile'
     }}
     component={EditProfileScreen}
    />
      
    </ProfileStack.Navigator>
  )
}