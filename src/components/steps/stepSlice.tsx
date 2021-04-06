import {createSlice} from '@reduxjs/toolkit';

const options = {
   name: 'step',
   initialState: 1,
   reducers: {
      increment: (state: any, action: any) => {
         return state + 1
      },
      decrement: (state: any, action:any) => {
         state -= 1
      }
   }
}

const stepSlice = createSlice(options)
export const stepReducer = stepSlice.reducer

export const selectStep = (state:any):number => state.step;