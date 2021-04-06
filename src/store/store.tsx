// import {configureStore} from '@reduxjs/toolkit';
import {createStore} from '@reduxjs/toolkit';
// import {stepReducer} from '../components/steps/stepSlice';
// import {useSelector} from 'react-redux'


// Actions
const increment = () => {
   return {type: 'step/increment'}
}
const decrement = () => {
   return {type: 'step/decrement'}
}

// Reducer 
const initialState = 1;
const stepReducer = (state:number = initialState, action:any) => {
   switch (action.type) {
      case 'step/increment':
         return state + 1
      case 'step/decrement':
         return state - 1 
      default:
         return state
   }
}

// Store 
const store = createStore(stepReducer)


// const store = configureStore({
//    reducer: {
//       step: stepReducer
//    }
// })

export default store
// console.log(store)
// console.log(store.getState())
// const selectStep = (state:any) => {
//    state.step 
// }
