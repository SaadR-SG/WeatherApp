import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = process.env.REACT_APP_API_KEY;
const startUrl = process.env.REACT_APP_START_URL;
// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: startUrl }),
    endpoints: (builder) => ({
      getWeather: builder.query({
            query: (q) => `/forecast?q=${q}&appid=${apiKey}`,
      }),
    }),
  })
  
  export const { useGetWeatherQuery } = weatherApi