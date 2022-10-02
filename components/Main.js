import React, { Component } from 'react';
import { View, Text, Button, TextImput } from 'react-native';
import Icons  from 'react-native-vector-icons/Ionicons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/Home';
import CalendarScreen from './screens/Calendar';
import FavoritesScreen from './screens/Favorites';
import InvolvementScreen from './screens/Involvement';
import ProfileScreen from './screens/Profile';

const Tab = createBottomTabNavigator();

export class Main extends Component{
    render() {
        return (
                <Tab.Navigator>
                    <Tab.Screen name = "Home" component = {HomeScreen} 
                        options = {{
                            tabBarIcon: ({ color, size }) => (
                                <Icons name = "home-outline" color = { color } size = { 26 } />
                            )
                        }}
                    />
                    <Tab.Screen name = "Calendar" component = {CalendarScreen} 
                        options = {{
                            tabBarIcon: ({ color, size }) => (
                                <Icons name = "calendar-outline" color = { color } size = { 26 } />
                            )
                        }}
                    />
                    <Tab.Screen name = "Favorites" component = {FavoritesScreen} 
                        options = {{
                            tabBarIcon: ({ color, size }) => (
                                <Icons name = "notifications-outline" color = { color } size = { 26 } />
                            )
                        }}
                    />
                    <Tab.Screen name = "Involvement" component = {InvolvementScreen} 
                        options = {{
                            tabBarIcon: ({ color, size }) => (
                                <Icons name = "people-outline" color = { color } size = { 26 } />
                            )
                        }}
                    />
                    <Tab.Screen name = "Profile" component = {ProfileScreen} 
                        options = {{
                            tabBarIcon: ({ color, size }) => (
                                <Icons name = "person-outline" color = { color } size = { 26 } />
                            )
                        }}
                    />
                </Tab.Navigator>
        )
    }
}

export default Main;