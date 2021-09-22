import reducer, { addComment, initialState } from './slice'

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
})
