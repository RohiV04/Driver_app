import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './App/Pages/login';
import TabNavigation from './App/Navigation/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <ClerkProvider publishableKey='pk_test_YW1hemVkLW1hc3RpZmYtNjIuY2xlcmsuYWNjb3VudHMuZGV2JA'>
      <View style={styles.container}>
        <StatusBar style='auto' />
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
