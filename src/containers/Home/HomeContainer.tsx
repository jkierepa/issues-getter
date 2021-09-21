import React, { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '@store/store'
import { fetchIssuePage, resetIssues } from '@store/issues/slice'

import { Issue } from '@appTypes/appTypes'
import selectIssues from '@utils/searchIssues'

import HomeContainerLayout from './HomeContainerLayout'

const HomeContainer = (): React.ReactElement => {
  const dispatch = useAppDispatch()
  const issues = useAppSelector(state => state.issues.issues)
  const [selectedIssues, setSelectedIssues] = useState<Issue[]>([])
  const [searchPhrase, setSearchPhrase] = useState<string>('')

  useEffect(() => {
    if (searchPhrase) {
      const searchMatches = selectIssues(issues, searchPhrase)
      setSelectedIssues(searchMatches)
    } else {
      setSelectedIssues(issues)
    }
  }, [searchPhrase, issues])

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

  return <HomeContainerLayout
    onEndReached={() => fetchNext()}
    onRefresh={() => refresh()}
    selectedIssues={selectedIssues}
    setSearchPhrase={value => setSearchPhrase(value)}
    searchPhrase={searchPhrase}
    />
}

export default HomeContainer
