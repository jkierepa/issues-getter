import reducer, { addComment, removeComment, initialState } from './slice'

describe('issues slice', () => {
  describe('initial state', () => {
    test('should return initial state', () => {
      expect(reducer(undefined, { type: {} })).toStrictEqual(initialState)
    })
    test('should return initial specified state', () => {
      expect(reducer(undefined, { type: {} })).toStrictEqual({ commentedIssues: [] })
    })
  })

  describe('add comment', () => {
    test('should not add empty comment', () => {
      expect(reducer(initialState, addComment({ issueId: 10, comment: '', timestamp: 0 }))).toStrictEqual(initialState)
    })
    test('should add comment to issue without any previous comments', () => {
      const nextState = { commentedIssues: [{ issueId: 10, comments: [{ comment: 'TEST COMM', timestamp: 0 }] }] }
      expect(reducer(initialState, addComment({ issueId: 10, comment: 'TEST COMM', timestamp: 0 }))).toStrictEqual(nextState)
    })
    test('should add comment to issue with previous comments', () => {
      const prevState = { commentedIssues: [{ issueId: 10, comments: [{ comment: 'TEST COMM', timestamp: 0 }] }] }
      const nextState = { commentedIssues: [{ issueId: 10, comments: [{ comment: 'TEST COMM', timestamp: 0 }, { comment: 'TEST COMM2', timestamp: 1 }] }] }
      expect(reducer(prevState, addComment({ issueId: 10, comment: 'TEST COMM2', timestamp: 1 }))).toStrictEqual(nextState)
    })
    test('should add comment to different issue', () => {
      const prevState = { commentedIssues: [{ issueId: 10, comments: [{ comment: 'TEST COMM', timestamp: 0 }] }] }
      const nextState = { commentedIssues: [{ issueId: 10, comments: [{ comment: 'TEST COMM', timestamp: 0 }] }, { issueId: 11, comments: [{ comment: 'TEST COMM2', timestamp: 1 }] }] }
      expect(reducer(prevState, addComment({ issueId: 11, comment: 'TEST COMM2', timestamp: 1 }))).toStrictEqual(nextState)
    })
  })

  describe('remove comment', () => {
    const prevState = { commentedIssues: [{ issueId: 10, comments: [{ comment: 'TEST COMM', timestamp: 0 }] }] }

    test('should remove comment', () => {
      const nextState = { commentedIssues: [{ issueId: 10, comments: [] }] }
      expect(reducer(prevState, removeComment({ issueId: 10, timestamp: 0 }))).toStrictEqual(nextState)
    })

    test('should not remove comment because of id', () => {
      expect(reducer(prevState, removeComment({ issueId: 11, timestamp: 0 }))).toStrictEqual(prevState)
    })

    test('should not remove comment because of timestamp', () => {
      expect(reducer(prevState, removeComment({ issueId: 10, timestamp: 1 }))).toStrictEqual(prevState)
    })

    test('should remove only one comment', () => {
      const multiPrevState = { commentedIssues: [{ issueId: 10, comments: [{ comment: 'TEST COMM', timestamp: 0 }, { comment: 'TEST COMM2', timestamp: 1 }] }] }
      expect(reducer(multiPrevState, removeComment({ issueId: 10, timestamp: 1 }))).toStrictEqual(prevState)
    })

    test('should remove multiple comments', () => {
      const multiPrevState = { commentedIssues: [{ issueId: 10, comments: [{ comment: 'TEST COMM', timestamp: 0 }, { comment: 'TEST COMM2', timestamp: 0 }] }] }
      expect(reducer(multiPrevState, removeComment({ issueId: 10, timestamp: 0 }))).toStrictEqual({ commentedIssues: [{ issueId: 10, comments: [] }] })
    })
  })
})
