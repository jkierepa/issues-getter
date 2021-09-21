import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { StatusBar } from 'expo-status-bar'
import { createStackNavigator } from '@react-navigation/stack'

import { persistor, store } from '@store/store'

import Home from '@screens/Home/Home'
import { RootStackParamList } from '@appTypes/navTypes'
import Details from '@screens/Details/Details'

const RootStack = createStackNavigator<RootStackParamList>()

export default function App () {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootStack.Navigator initialRouteName="Home">
            <RootStack.Screen name="Home" component={Home} />
            <RootStack.Screen name="Details" component={Details} />
          </RootStack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}
