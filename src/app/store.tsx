import {configureStore} from '@reduxjs/toolkit';
import {stepReducer} from '../components/steps/stepSlice';


// Store 
export const store:any = configureStore({
   reducer: {
      step: stepReducer
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch