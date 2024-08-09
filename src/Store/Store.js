import { configureStore } from "@reduxjs/toolkit";
import {curtainSlice} from "./Api/CurtSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store= configureStore({
    reducer:{
[curtainSlice.reducerPath]:curtainSlice.reducer   
},
middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware().concat(curtainSlice.middleware)
} )
setupListeners(store.dispatch)