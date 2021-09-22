import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CommentedIssue, IssueComment, IssueCommentIdentifier } from '@appTypes/appTypes'

export type CommentsState = {
    commentedIssues: CommentedIssue[]
}

export const initialState: CommentsState = {
  commentedIssues: []
}

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<IssueComment>) => {
      const target = state.commentedIssues.find((issue) => issue.issueId === action.payload.issueId)
      if (target) {
        if (action.payload.comment) {
          target.comments.push({ comment: action.payload.comment, timestamp: action.payload.timestamp })
        }
      } else {
        if (action.payload.comment) {
          const commIss: CommentedIssue = { issueId: action.payload.issueId, comments: [{ comment: action.payload.comment, timestamp: action.payload.timestamp }] }
          state.commentedIssues.push(commIss)
        }
      }
    },
    removeComment: (state, action: PayloadAction<IssueCommentIdentifier>) => {
      const target = state.commentedIssues.find((issue) => issue.issueId === action.payload.issueId)
      if (target && action.payload) {
        const filtered = target.comments.filter((c) => c.timestamp !== action.payload.timestamp)
        target.comments = filtered
      }
    }
  }
})

export const { addComment, removeComment } = commentsSlice.actions
export default commentsSlice.reducer
