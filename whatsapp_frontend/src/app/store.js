import { combineReducers, configureStore } from "@reduxjs/toolkit";
//slices
import userSlice from "../features/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import createFilter from "redux-persist-transform-filter";

//saveUserOnlyFilter
const saverUserOnlyFilter = createFilter("user", ["user"]);


//persist config
const persistConfig = {
    key: "user",
    storage,
    whitelist: ["user"],
    transforms: [saverUserOnlyFilter],
};

const rootReducer = combineReducers({
    user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: true,
});

export const peristor = persistStore(store);