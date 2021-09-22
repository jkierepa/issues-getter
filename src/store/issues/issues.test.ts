import { OctokitResponse } from '@octokit/types'
import reducer, { resetIssues, fetchIssuePage, initialState } from './slice'

describe('issues slice', () => {
  describe('initial state', () => {
    test('should return initial state', () => {
      expect(reducer(undefined, { type: {} })).toStrictEqual(initialState)
    })
    test('should return initial specified state', () => {
      expect(reducer(undefined, { type: {} })).toStrictEqual({ issues: [], nextPage: 1, issueIds: [] })
    })
  })

  describe('reset issues', () => {
    test('should reset state to initial state', () => {
      const prevState = { issues: [], nextPage: 2, issueIds: [10] }
      expect(reducer(prevState, resetIssues())).toStrictEqual(initialState)
    })
  })

  describe('fetch issues page', () => {
    const fetched = { data: [{ id: 10, title: 'TEST TITLE', created_at: 'TEST DATE', body: 'TEST BODY', state: 'OPEN' }] }

    test('should not change state if issues is undefindes', () => {
      const action = fetchIssuePage.fulfilled({} as OctokitResponse<any>, '', { owner: 'facebook', repo: 'react-native' })
      expect(reducer(initialState, action)).toStrictEqual(initialState)
    })

    test('should update state', () => {
      const action = fetchIssuePage.fulfilled(fetched as OctokitResponse<any>, '', { owner: 'facebook', repo: 'react-native' })
      const nextState = { issues: [{ id: 10, title: 'TEST TITLE', createdAt: 'TEST DATE', body: 'TEST BODY', state: 'OPEN' }], nextPage: 2, issueIds: [10] }
      expect(reducer(initialState, action)).toStrictEqual(nextState)
    })

    test('should not update state id', () => {
      const fetchedIncomplete = { data: [{ title: 'TEST TITLE', created_at: 'TEST DATE', body: 'TEST BODY', state: 'OPEN' }] }
      const action = fetchIssuePage.fulfilled(fetchedIncomplete as OctokitResponse<any>, '', { owner: 'facebook', repo: 'react-native' })
      expect(reducer(initialState, action)).toStrictEqual(initialState)
    })

    test('should not update state id', () => {
      const fetchedIncomplete = { data: [{ id: 10, title: 'TEST TITLE', created_at: 'TEST DATE', state: 'OPEN' }] }
      const action = fetchIssuePage.fulfilled(fetchedIncomplete as OctokitResponse<any>, '', { owner: 'facebook', repo: 'react-native' })
      const nextState = { issues: [{ id: 10, title: 'TEST TITLE', createdAt: 'TEST DATE', body: undefined, state: 'OPEN' }], nextPage: 2, issueIds: [10] }
      expect(reducer(initialState, action)).toStrictEqual(nextState)
    })
  })
})
