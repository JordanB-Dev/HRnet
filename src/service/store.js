import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, PERSIST } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import employeeReducer from './employeeSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, employeeReducer)

const store = configureStore({
  reducer: {
    employees: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Configuration to ignore serialization check for persist action
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
})

export const persistor = persistStore(store)

export default store
