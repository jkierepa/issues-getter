import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CommentedIssue, IssueComment } from '@appTypes/appTypes'

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
        target.comments.push({ comment: action.payload.comment, timestamp: action.payload.timestamp })
      } else {
        const commIss: CommentedIssue = { issueId: action.payload.issueId, comments: [{ comment: action.payload.comment, timestamp: action.payload.timestamp }] }
        state.commentedIssues.push(commIss)
      }
    }
  }
})

export const { addComment } = commentsSlice.actions
export default commentsSlice.reducer
