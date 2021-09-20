import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CommentedIssue } from '@appTypes/appTypes'

export type CommentsState = {
    commentedIssues: CommentedIssue[]
}

export const initialState: CommentsState = {
  commentedIssues: []
}

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {}
})

// export const {} = commentsSlice.actions
export default commentsSlice.reducer
