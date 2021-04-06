import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../app/store';

interface StepState {
   step: number;
   title: string;
}

const initialState: StepState = {step: 1, title: 'Project Specifications'}

const stepSlice = createSlice({
   name: 'step',
   initialState,
   reducers: {
      increment: (state:any) => {
         state.step += 1
         state.title = stepRef[state.step]
      },
      decrement: (state:StepState) => {
         state.step -= 1
         state.title = stepRef[state.step]

      },
      setStep: (state:any, action: PayloadAction<number>) => {
         state.step = action.payload
         state.title = stepRef[action.payload]

      }
   }
})

const stepRef:any = {
   1: 'Project Specifications',
   2: 'System Selections',
   3: 'System Details',
   4: 'System Equipment',
   5: 'Non-System Equipment',
   6: 'System Review',
}
export const selectStep = (state: RootState) => state.step;
export const {increment, decrement, setStep} = stepSlice.actions
export const stepReducer = stepSlice.reducer

// Check the store
// console.log('stepSlice:', stepSlice)
// console.log('name:', stepSlice.name)
// console.log('actions:', stepSlice.actions)
// console.log('reducer:', stepSlice.reducer)