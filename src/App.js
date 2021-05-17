import React from 'react'
import { Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './view/Home'
import Main from './view/Main'

const Stack = createStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home">

                <Stack.Screen
                    name="Home" 
                    component={Home}
                    options={{
                        headerShown:false
                    }} />
                
                <Stack.Screen
                    name="Main" 
                    component={Main}
                    options={{
                        headerShown:false
                    }} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}