import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import EJScreen from "./screens/EJ";
import GitHubcreen from "./screens/GitHub";

const Stack = createStackNavigator();

export default function () {
    return (<NavigationContainer>
        <Stack.Navigator initialRouteName={"home"} headerMode={"none"}>
            <Stack.Screen component={HomeScreen} name="home" />
            <Stack.Screen component={EJScreen} name="ej" />
            <Stack.Screen component={GitHubcreen} name="github" />
        </Stack.Navigator>
    </NavigationContainer>)
}

