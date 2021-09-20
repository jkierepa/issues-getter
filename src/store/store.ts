import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

import issuesReducer from './issues/slice'
import commentsReducer from './comments/slice'

import {
  FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE
} from 'redux-persist'

const reducers = combineReducers({
  issues: issuesReducer,
  comments: commentsReducer
})

const persistConfig = {
  key: 'root',
  whitelist: ['comments'],
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] }
  })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const persistor = persistStore(store)

export { store, persistor }
