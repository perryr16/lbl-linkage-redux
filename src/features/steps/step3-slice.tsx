import {createSlice, } from '@reduxjs/toolkit';
import type {RootState} from '../../app/store';



const initialState: any = {}
const step3Slice = createSlice({
  name: 'step3',
  initialState,
  reducers: {
    resetStep3: (state, {payload}) => {
      state = initialState;
    },
    addSystemType: (state, {payload}) => {
      state[payload] = []
    },
    addSystemId: (state, {payload}) => {
      state[payload.systemType].push({id:payload.systemId})
    },
    addSystemKeyValue: (state, {payload}) => {
      state[payload.systemType][payload.systemId][payload.key] = payload.value
    }, 
    removeSystemTypeById: (state, {payload}) => {
      state[payload.systemType] = state[payload.systemType].filter((system:any) => system.id !== payload.systemId)
    },
    removeSystemKey: (state, {payload}) => {
      delete state[payload.systemType][payload.index][payload.key]
    },

  }
})

export const selectStep3 = (state: RootState) => state.step3;
export const {addSystemType, addSystemId, addSystemKeyValue, removeSystemTypeById, removeSystemKey, resetStep3} = step3Slice.actions;
export const step3Reducer = step3Slice.reducer;

// Check the store
// console.log('step3Slice:', step3Slice)
// console.log('name:', step3Slice.name)
// console.log('actions:', step3Slice.actions)
// console.log('resetStep3:', step3Slice.actions.resetStep3)
// console.log('reducer:', step3Slice.reducer)