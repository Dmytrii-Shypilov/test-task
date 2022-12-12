import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchJobs } from "services/fetch";

export const getJobsData = createAsyncThunk(
    'jobs/fetch',
    async (data, {rejectWithValue}) => {
        try {
            const jobs = await fetchJobs()
            return jobs
        } catch (error) {
           return rejectWithValue(error)
        }
    }
)