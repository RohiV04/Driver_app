import { SafeAreaView, StyleSheet, Text, View, Image, Pressable, Button } from 'react-native'
import React, {useContext, useEffect, useState} from 'react'

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

import * as WebBrowser from "expo-web-browser"
import { useWarmUpBrowser } from '../Hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';


WebBrowser.maybeCompleteAuthSession();
export default function Login() {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
    
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);
  return (
    <SafeAreaView>
      <View style={styles.hero}>
        <Image style={styles.mainImg} 
          source={require('./../Assets/Images/vehicle.png')} />
      </View>
        <View style={styles.container}>
            <Pressable style={styles.button}
              onPress={onPress}>
              <Ionicons name="logo-google" size={24} color="white" style={{marginRight:10}} />
              <Text style={{
                color: 'white',
                }}>Sign In with Google</Text>
            </Pressable>
            <Pressable style = {styles.button1}
              onPress={onPress}>
              <FontAwesome6 name="user-large" size={26} color="white" style={{marginRight:10}}/>
              <Text style={{color: 'black'}}>New User?</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    mainImg: {
        width: 384,
        height: 308,
    },
    hero:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 160,
      paddingRight: 10
    },
    button: {
        backgroundColor: '#FADA5E',
        padding: 10,
        margin: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
    },
    button1: {
      paddingBottom: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      margin: -20,
    }
})