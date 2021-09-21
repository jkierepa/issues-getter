import React, { useState, useEffect } from 'react'
import { View, FlatList, ListRenderItem, StyleSheet } from 'react-native'

import IssueItem from '@components/IssueItem/IssueItem'

import { Issue } from '@appTypes/appTypes'
import { IssueListProps } from '@appTypes/propTypes'

const renderItem: ListRenderItem<Issue> = ({ item, index }) => (
  <IssueItem id={item.id}
    title={item.title}
    state={item.state}
    body={item.body}
    createdAt={item.createdAt}
    index={index}
  />
)

const IssueList = ({ issues, onEndReached, onRefresh }: IssueListProps):React.ReactElement => {
  const [refreshing, setRefreshing] = useState<boolean>(false)

  useEffect(() => {
    setRefreshing(false)
  }, [issues])

  return (
  <View style={styles.container}>
    <FlatList
    style={styles.flatlist}
    data={issues}
    renderItem={renderItem}
    keyExtractor={item => item.id.toString()}
    onEndReached={() => onEndReached()}
    onRefresh={() => {
      setRefreshing(true)
      onRefresh()
    }}
    refreshing={refreshing}
    ItemSeparatorComponent={() => <View style={styles.separator}/>}
    />
  </View>
  )
}

export default IssueList

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatlist: {
    width: '90%'
  },
  separator: {
    height: 10
  }
})
