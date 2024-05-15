import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef } from 'react'

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native';

import { markers } from '../Utils/Markers';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const INITIAL_REGION = {
  latitude: 12.838146,
  longitude: 80.136204,
  latitudeDelta: 2,
  longitudeDelta: 2
}

export default function HomeScreen() {
const mapRef = useRef(MapView);
const navigation = useNavigation();

useEffect(() => {
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={focusMap}>
        <View style={{padding: 15}}>
          <MaterialIcons name="center-focus-strong" size={28} color="black" />
        </View>
      </TouchableOpacity>
    )
  })
}, []);

const focusMap = () => {
  const AcademicBlock = {
    latitude: 12.838174,
    longitude: 80.136265,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1
  };

  mapRef.current?.animateCamera({center: AcademicBlock, zoom: 17.5}, { duration: 3000 });
};

  const onMarkerSelected = (marker) => {
    Alert.alert(marker.name);
  }

  return (
    <View style={{flex: 1}}>
      <MapView 
        style={StyleSheet.absoluteFill} 
        provider={PROVIDER_GOOGLE} 
        initialRegion={INITIAL_REGION}
        showsUserLocation = {true}
        ref={mapRef}
      >
        {markers.map((marker, index) => (
          <Marker key={index} coordinate={marker} onPress={() =>  onMarkerSelected(marker)} /> 
        ))}
      </MapView>
    </View>
  )
}

