import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Issue } from '@appTypes/appTypes'

export type IssuesState = {
    issues: Issue[]
}

export const initialState: IssuesState = {
  issues: []
}

export const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {}
})

// export const {} = issuesSlice.actions
export default issuesSlice.reducer
