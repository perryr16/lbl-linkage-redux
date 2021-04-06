import {configureStore} from '@reduxjs/toolkit';
import {createStore, combineReducers } from 'redux';
import {stepReducer} from '../components/steps/stepSlice';


// Store 

export const store:any = configureStore({
   reducer: {
      step: stepReducer
   }
})

console.log('storeX:', store)
