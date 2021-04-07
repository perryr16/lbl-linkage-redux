import {configureStore} from '@reduxjs/toolkit';
import {stepReducer} from '../components/steps/step-slice';
import {step1Reducer} from '../components/steps/step1-slice';


// Store 
export const store:any = configureStore({
   reducer: {
      step: stepReducer,
      step1: step1Reducer
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch