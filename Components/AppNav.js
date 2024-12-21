import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome"; // Ensure you specify the icon library
import GuessCapital from './GuessCapital';
import GuessCountry from './GuessCountry';

const Tab = createBottomTabNavigator();

const AppNav = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: '#465f78',
                }}
            >
                <Tab.Screen
                    name="Guess Capital"
                    component={GuessCapital}
                    options={{
                        tabBarLabelStyle: {
                            fontSize: 10,
                            color: '#000',
                        },
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="graduation-cap" size={size} color={color}
                                style={{ marginBottom: 5, }}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Guess Country"
                    component={GuessCountry}
                    options={{
                        tabBarLabelStyle: {
                            fontSize: 10,
                            color: '#000',
                        },
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="globe" size={size} color={color} style={{ marginBottom: 5, }} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNav;

const styles = StyleSheet.create({});
