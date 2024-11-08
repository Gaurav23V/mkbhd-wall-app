 import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={HomeScreen} />
      <Tab.Screen name="Liked" component={ProfileScreen} />
      <Tab.Screen name="Suggested" component={Something} />
    </Tab.Navigator>
  );
}

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Library!</Text>
        </View>
    );
}

function ProfileScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Liked!</Text>
        </View>
    );
}

function Something() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Suggested!</Text>
        </View>
    );
}

export default ForYou;
