import { createSlice } from '@reduxjs/toolkit';
import { getJobsData } from './operations';

const initialState = {
  jobs: [],
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  extraReducers: {
    [getJobsData.fulfilled]: (store, {payload}) => {
        store.jobs = [...payload]
    }
  }
});

export default jobsSlice.reducer