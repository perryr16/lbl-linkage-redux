import {createSlice} from '@reduxjs/toolkit';

const initialState:number = 1;
export const stepReducer = (step:number = initialState, action:any) => {
   switch (action.type) {
      case 'step/increment':
         return action.payload
      case 'step/decrement':
         return action.payload
      default:
         return step
   }
}

export const selectStep = (state:any):number => state.step;



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

