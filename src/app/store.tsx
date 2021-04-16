import {configureStore} from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';

import {stepReducer} from '../features/steps/step-slice';
import {step1Reducer} from '../features/steps/step1-slice';
import {step2Reducer} from '../features/steps/step2-slice';
import {step3Reducer} from '../features/steps/step3-slice';


export const reducers = combineReducers({
   step: stepReducer,
   step1: step1Reducer,
   step2: step2Reducer,
   step3: step3Reducer,
})

const persistConfig = {
   key: 'root',
   storage,
 };

const persistedReducer = persistReducer(persistConfig, reducers);

// Store 
export const store:any = configureStore({
   reducer: persistedReducer,
   devTools: process.env.NODE_ENV !== 'production',
   middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch