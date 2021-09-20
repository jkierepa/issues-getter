import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { StatusBar } from 'expo-status-bar'
import { createStackNavigator } from '@react-navigation/stack'

import { persistor, store } from '@store/store'

import Home from '@screens/Home/Home'
import Comments from '@screens/Comments/Comments'

import fetchIssues from '@api/fetchIssues'
import { RootStackParamList } from '@appTypes/navTypes'

const RootStack = createStackNavigator<RootStackParamList>()

export default function App () {
  useEffect(() => {
    (async () => {
      const resp = await fetchIssues('facebook', 'react-native')
      console.log('first', resp.data[0].id)
    })();

    (async () => {
      const resp = await fetchIssues('facebook', 'react-native')
      console.log(Object.keys(resp.data[0]))
      console.log('second', typeof resp.data[0].state)
    })()
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootStack.Navigator initialRouteName="Home">
            <RootStack.Screen name="Home" component={Home} />
            <RootStack.Screen name="Comments" component={Comments} />
          </RootStack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}
