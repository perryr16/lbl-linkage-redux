import {createSlice} from '@reduxjs/toolkit';

// Selectors
export const selectStep = (state:any):number => state.step;


const options = {
   name: 'step',
   initialState: 1,
   reducers: {
      increment: (state:any) => {
         return state >= 6 ? 1 : state += 1
      },
      decrement: (state:any) => {
         return state <= 1 ? 6 : state -= 1
      },
      setStep: (state:any, action:any) => {
         return action.payload
      }
   }
}

const stepSlice = createSlice(options)
export const {increment, decrement, setStep} = stepSlice.actions
export const stepReducer = stepSlice.reducer

// Check the store
// console.log('stepSlice:', stepSlice)
// console.log('name:', stepSlice.name)
// console.log('actions:', stepSlice.actions)
// console.log('reducer:', stepSlice.reducer)