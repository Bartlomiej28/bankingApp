// store.ts
import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./userData-slice";
import appSlice from "./app-slice";

// Konfiguracja sklepu Redux
const store = configureStore({
    reducer: {
        userData: userDataSlice.reducer,
        appData: appSlice.reducer
    }
});

// Typy dla RootState i AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Eksport sklepu jako domyślnego eksportu
export default store;