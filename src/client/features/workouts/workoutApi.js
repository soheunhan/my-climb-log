// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// API communication with server
export const workoutApiSlice = createApi({
  reducerPath: 'workoutApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/workout/' }),
  endpoints: (builder) => ({
    // sending a get request to get all workout data
    getWorkout: builder.query({
      query: () => 'history',
    }),
    //sending a get request to get all session data
    getSession: builder.query({
      query: () => 'session',
    }),
    //sending a post request to add individual workout
    addWorkout: builder.mutation({
      query: (workout) => ({ url: 'new', method: 'POST', body: workout }),
    }),
    // sending a patch request to edit current session
    updateSession: builder.mutation({
      query: (session) => ({ url: 'new', method: 'PATCH', body: session }),
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetWorkoutQuery,
  useGetSessionQuery,
  useAddWorkoutMutation,
  useUpdateSessionMutation,
} = workoutApiSlice;
