import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../app/store';

interface Systems {
  
}

const initialState: any = {}
const step3Slice = createSlice({
  name: 'step3',
  initialState,
  reducers: {
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
      state[payload.systemType] = state[payload.systemType].filter((system:any) => system.id != payload.systemId)
    }
  }
})

export const selectStep3 = (state: RootState) => state.step3;
export const {addSystemType, addSystemId, addSystemKeyValue, removeSystemTypeById} = step3Slice.actions;
export const step3Reducer = step3Slice.reducer;