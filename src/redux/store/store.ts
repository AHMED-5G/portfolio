import {configureStore} from '@reduxjs/toolkit';
// import {logger} from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
// import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {dataSlice} from '../reducers/dataSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, dataSlice.reducer);
export const store = configureStore({
  reducer: {
    dataSlice: persistedReducer,
  },
  // devTools: process.env.NODE_ENV !== "production",
  // middleware: [thunk, logger],
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(),
    // getDefaultMiddleware({serializableCheck: false}).concat(logger),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
