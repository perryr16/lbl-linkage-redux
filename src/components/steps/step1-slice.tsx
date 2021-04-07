import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../app/store';

interface Step1State {
  energyCode?: string,
  location?: string,
  input3?: string,
  input4?: string,
  input5?: string,
}
const initialState: Step1State = {energyCode: '', location: '', input3: '', input4: '', input5: ''}

const step1Slice = createSlice({
  name: 'step1',
  initialState,
  reducers: {
    setEnergyCode: (state, action) => {
      state.energyCode = action.payload
    },
    setLocation: (state, action) => {
      state.location = action.payload
    },
    setInput3: (state, action) => {
      state.input3 = action.payload
    },
    setInput4: (state, action) => {
      state.input4 = action.payload
    },
    setInput5: (state, action) => {
      state.input5 = action.payload
    },
  }
})

export const selectStep1 = (state: RootState) => state.step1;
export const {setEnergyCode, setLocation, setInput3, setInput4, setInput5} = step1Slice.actions;
export const step1Reducer = step1Slice.reducer;