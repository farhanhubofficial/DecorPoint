import { createApi } from "@reduxjs/toolkit/query/react";
import {fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const Base_URL = "http://localhost:3002";

export const curtainSlice = createApi({
  //setup
  reducerPath: "CurtainApi",
  baseQuery: fetchBaseQuery({
    
    baseUrl: Base_URL
  }),
  tagTypes: ['Curtain'],
  //Endpoint

  endpoints: (builder) => ({
    fetchCurtains: builder.query({
      query: () => {
        return {
          url: "TotalCurtains",
          method: "GET",
        };

      },


      providesTags: (result) =>
        result
          ? // Successful query
            [...result.map(({ id }) => ({ type: 'Curtain', id })), 'Curtain']
          : // Error
            ['Curtain'],
    }),
    


addCurtain: builder.mutation({
  query:(newCurtain) =>({
    url: "TotalCurtains",
    method:"POST",
    body: newCurtain 
  }),
  invalidatesTags: ['Curtain'],
})

  }),
});


export const  {useFetchCurtainsQuery, useAddCurtainMutation } = curtainSlice

export default curtainSlice.reducer



// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// const initialState = {
//   curtains: [],
//   status: "idle",
//   error: null,
// };
// export const fetchCurtains = createAsyncThunk(
//   "curtains/fetchCurtains",
//   async () => {
//     const response = await axios.get("http://localhost:3002/TotalCurtains");
//     return response.data;
//   }
// );

// export const AddCurtains = createAsyncThunk(
//   "curtains/addCurtains",
//   async (newCurtain) => {
//     const response = await axios.post(
//       "http://localhost:3002/TotalCurtains",
//       newCurtain
//     );
//     return response.data;
//   }
// );

// export const curtslice = createSlice({
//   name: "curtains",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCurtains.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(fetchCurtains.fulfilled, (state, action) => {
//         state.status = "succeded";
//         state.curtains = action.payload;
//       })
//       .addCase(fetchCurtains.rejected, (action, state) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       })

//       .addCase(AddCurtains.fulfilled, (state, action) => {
//         console.log("hey",action.payload);
//       });
//   },
// });
// export const selectedAllCurtains = (state) => state.Curtains.curtains;
// export const selectCurtainStatus = (state) => state.curtains.status;
// export const selectcurtainError = (state) => state.curtains.error;

// export default curtslice.reducer;
