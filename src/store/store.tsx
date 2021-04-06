// import {configureStore} from '@reduxjs/toolkit';
import {createStore, combineReducers } from 'redux';
import {stepReducer} from '../components/steps/stepSlice';

// import {useSelector} from 'react-redux'




// Store 
export const store:any = createStore<any, any, any, any>(combineReducers({
   step: stepReducer
}));


// const store = configureStore({
//    reducer: {
//       step: stepReducer
//    }
// })

// console.log(store)
// console.log(store.getState())
// const selectStep = (state:any) => {
//    state.step 
// }
