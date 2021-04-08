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
  }
})

export const selectStep3 = (state: RootState) => state.step3;
export const {addSystemType} = step3Slice.actions;
export const step3Reducer = step3Slice.reducer;