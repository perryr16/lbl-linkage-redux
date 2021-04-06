import {createSlice} from '@reduxjs/toolkit';

const initialState:number = 1;
export const stepReducer = (step:number = initialState, action:any) => {
   switch (action.type) {
      case 'step/increment':
         return step >= 6 ? 1 : step + 1
      case 'step/decrement':
         return step <= 1 ? 6 : step -1
      case 'step/setStep':
         return action.payload
      default:
         return step
   }
}

// Selectors
export const selectStep = (state:any):number => state.step;


// Actions
export const incrementStep = () => {
   return {type: 'step/increment', payload: null}
}
export const decrementStep = () => {
   return {type: 'step/decrement', payload: null}
}
export const setStep = (step:number) => {
   return {type: 'step/setStep', payload: step}
}

// const options = {
//    name: 'step',
//    initialState: 1,
//    reducers: {
//       increment: (state: any, action: any) => {
//          return state + 1
//       },
//       decrement: (state: any, action:any) => {
//          state -= 1
//       }
//    }
// }

// const stepSlice = createSlice(options)
// export const stepReducer = stepSlice.reducer

