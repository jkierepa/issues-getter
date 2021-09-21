import { Issue } from '@appTypes/appTypes'
import { RootStackParamList } from '@appTypes/navTypes'
import IssueItem from '@components/IssueItem/IssueItem'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useState, useEffect } from 'react'
import { View, FlatList, ListRenderItem } from 'react-native'

export type IssueListProps = {
    issues: Issue[]
    onEndReached(): void
    onRefresh(): void
}

const renderItem: ListRenderItem<Issue> = ({ item }) => <IssueItem id={item.id} title={item.title} state={item.state} body={item.body} createdAt={item.createdAt} onIssuePressed={() => console.log('pressed', item.id)}/>

const IssueList = ({ issues, onEndReached, onRefresh }: IssueListProps) => {
  const [refreshing, setRefreshing] = useState<boolean>(false)

  useEffect(() => {
    setRefreshing(false)
  }, [issues])

  return (<View style={{ justifyContent: 'center', alignItems: 'center' }}><FlatList
    style={{ width: '90%' }}
    data={issues}
    renderItem={renderItem}
    keyExtractor={item => `${item.id}${item.title}`}
    onEndReached={() => onEndReached()}
    onRefresh={() => {
      setRefreshing(true)
      onRefresh()
    }}
    refreshing={refreshing}
    /></View>)
}

export default IssueList
