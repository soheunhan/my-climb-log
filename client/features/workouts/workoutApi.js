// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const workoutApiSlice = createApi({
  reducerPath: 'workoutApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/workout/' }),
  endpoints: (builder) => ({
    getWorkout: builder.query({
      query: () => 'history',
    }),
    getSession: builder.query({
      query: () => 'session',
    }),
    addWorkout: builder.mutation({
      query: (workout) => ({ url: 'new', method: 'POST', body: workout }),
    }),
    updateSession: builder.mutation({
      query: (session) => ({ url: 'new', method: 'PATCH', body: session }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetWorkoutQuery,
  useGetSessionQuery,
  useAddWorkoutMutation,
  useUpdateSessionMutation,
} = workoutApiSlice;
