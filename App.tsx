import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import fetchIssues from './src/api/fetchIssues'
import octokit from './src/api/octokit'
import { GITHUB_AUTH_TOKEN } from 'react-native-dotenv'

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
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
