import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

import IssueList from '@components/IssueList/IssueList'

import { colors } from '@theme/colors'
import { fontsizes } from '@theme/fontsizes'
import { HomeContainerLayoutProps } from '@appTypes/propTypes'

const HomeContainerLayout = ({ onEndReached, onRefresh, setSearchPhrase, searchPhrase, selectedIssues }: HomeContainerLayoutProps): React.ReactElement => {
  return (
  <View style={styles.container}>
    <TextInput value={searchPhrase} onChange={(e) => setSearchPhrase(e.nativeEvent.text)} style={styles.input} placeholder={'Search...'}/>
    <IssueList issues={selectedIssues} onEndReached={() => onEndReached()} onRefresh={() => onRefresh()}/>
  </View>
  )
}

export default HomeContainerLayout

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  input: {
    width: '90%',
    backgroundColor: colors.secondary.main,

    fontSize: fontsizes.m,

    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,

    marginVertical: 10,
    paddingHorizontal: 10
  }
})
