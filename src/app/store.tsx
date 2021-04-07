import {configureStore} from '@reduxjs/toolkit';
import {stepReducer} from '../components/steps/step-slice';
import {step1Reducer} from '../components/steps/step1-slice';
import {step2Reducer} from '../components/steps/step2-slice';
import {step3Reducer} from '../components/steps/step3-slice';


// Store 
export const store:any = configureStore({
   reducer: {
      step: stepReducer,
      step1: step1Reducer,
      step2: step2Reducer,
      step3: step3Reducer,
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
console.log(store)