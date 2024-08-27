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






// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from "firebase/firestore";
// import { db } from "../firebaseConfig";

// const curtainsCollection = collection(db, "curtains");

// export const curtainsApi = createApi({
//   reducerPath: "curtainsApi",
//   baseQuery: fetchBaseQuery(),
//   endpoints: (builder) => ({
//     fetchCurtains: builder.query({
//       async queryFn() {
//         const querySnapshot = await getDocs(curtainsCollection);
//         const curtains = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         return { data: curtains };
//       },
//     }),
//     addCurtain: builder.mutation({
//       async queryFn(newCurtain) {
//         await addDoc(curtainsCollection, newCurtain);
//         return { data: "Curtain added" };
//       },
//     }),
//     updateCurtain: builder.mutation({
//       async queryFn({ id, updatedCurtain }) {
//         const curtainDoc = doc(db, "curtains", id);
//         await updateDoc(curtainDoc, updatedCurtain);
//         return { data: "Curtain updated" };
//       },
//     }),
//     deleteCurtain: builder.mutation({
//       async queryFn(id) {
//         const curtainDoc = doc(db, "curtains", id);
//         await deleteDoc(curtainDoc);
//         return { data: "Curtain deleted" };
//       },
//     }),
//   }),
// });

// export const {
//   useFetchCurtainsQuery,
//   useAddCurtainMutation,
//   useUpdateCurtainMutation,
//   useDeleteCurtainMutation,
// } = curtainsApi;
