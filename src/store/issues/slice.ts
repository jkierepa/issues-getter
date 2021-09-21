import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FetchPageParams, Issue } from '@appTypes/appTypes'
import fetchIssues from '@api/fetchIssues'
import { RootState } from '@store/store'
import assertIssue from '@utils/assertIssue'

export const fetchIssuePage = createAsyncThunk('issues/fetchPage', async ({ owner, repo }: FetchPageParams, { getState, rejectWithValue }) => {
  try {
    const state = getState() as RootState
    const response = await fetchIssues(owner, repo, state.issues.nextPage)
    return response
  } catch (err) {
    // TODO: type this
    return rejectWithValue(err.response.data)
  }
})

export type IssuesState = {
    issues: Issue[]
    nextPage: number;
    issueIds: number[]
}

export const initialState: IssuesState = {
  issues: [],
  nextPage: 1,
  issueIds: []
}

export const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    resetIssues: (state) => {
      state.issues = initialState.issues
      state.nextPage = initialState.nextPage
      state.issueIds = initialState.issueIds
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIssuePage.fulfilled, (state, action: PayloadAction<any>) => {
      const issues = assertIssue(action.payload)
      if (issues) {
        issues.forEach((iss) => {
          if (!state.issueIds.includes(iss.id)) {
            state.issueIds.push(iss.id)
            state.issues.push(iss)
          }
        })
        state.nextPage = state.nextPage + 1
      }
    })
    builder.addCase(fetchIssuePage.rejected, (state, action: PayloadAction<unknown>) => {
      // TODO: change this
      console.warn(action.payload)
    })
  }
})

export const { resetIssues } = issuesSlice.actions
export default issuesSlice.reducer
