import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { GithubUser } from '~/types/github';

export type GithubInitialState = {
  githubUsers: GithubUser[];
};

const initialState: GithubInitialState = {
  githubUsers: [],
};

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    setCurrentGithubUsernames: (state, action: PayloadAction<GithubUser[]>) => {
      state.githubUsers = action.payload;
    },
  },
});

export const { setCurrentGithubUsernames } = githubSlice.actions;

export const selectCurrentGithubUser = (state: RootState) => state.github.githubUsers;

// export default githubSlice.reducer;
