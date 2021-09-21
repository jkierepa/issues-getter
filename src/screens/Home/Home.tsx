import { HomeScreenNavProps } from '@appTypes/navTypes'
import IssueList from '@components/IssueList/IssueList'
import { fetchIssuePage, resetIssues } from '@store/issues/slice'
import { useAppDispatch, useAppSelector } from '@store/store'
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = ({ navigation }: HomeScreenNavProps): React.ReactElement => {
  const dispatch = useAppDispatch()
  const issues = useAppSelector(state => state.issues.issues)

  const fetchNext = () => {
    dispatch(fetchIssuePage({ owner: 'facebook', repo: 'react-native' }))
  }

  const refresh = () => {
    dispatch(resetIssues())
    dispatch(fetchIssuePage({ owner: 'facebook', repo: 'react-native' }))
  }

  useEffect(() => {
    dispatch(fetchIssuePage({ owner: 'facebook', repo: 'react-native' }))
  }, [])

  return (
  <SafeAreaView>
    <View>
      <Text>{'HOME'}</Text>
      <IssueList issues={issues} onEndReached={() => fetchNext()} onRefresh={() => refresh()}/>
    </View>
  </SafeAreaView>)
}

export default Home
