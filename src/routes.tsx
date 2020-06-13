import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Navigation from './pages/Navigation'
import Mapa from './components/Menu/Mapa'
import Saude from './components/Menu/Saude'

import Ferramentas from './components/Menu/Ferramentas'
import listaCCR from './components/Menu/Ferramentas/listaCCR'
const Stack = createStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: { backgroundColor: '#f0f0f5' }
                }}
            >
                <Stack.Screen name="Navigation" component={Navigation} />
                <Stack.Screen name="Mapa" component={Mapa} />
                <Stack.Screen name="Saude" component={Saude} />
                <Stack.Screen name="Ferramentas" component={Ferramentas} />
                <Stack.Screen name="listaCCR" component={listaCCR} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;