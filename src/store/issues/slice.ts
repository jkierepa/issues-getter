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
}

export const initialState: IssuesState = {
  issues: [],
  nextPage: 1
}

export const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIssuePage.fulfilled, (state, action: PayloadAction<any>) => {
      const issues = assertIssue(action.payload)
      if (issues) {
        state.issues = [...state.issues, ...issues]
        state.nextPage = state.nextPage + 1
      }
    })
    builder.addCase(fetchIssuePage.rejected, (state, action: PayloadAction<unknown>) => {
      // TODO: change this
      console.log(action.payload)
    })
  }
})

// export const {} = issuesSlice.actions
export default issuesSlice.reducer
