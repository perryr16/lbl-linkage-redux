import {createSlice} from '@reduxjs/toolkit';
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
    setEnergyCode: (state, {payload}) => {
      state.energyCode = payload
    },
    setLocation: (state, {payload}) => {
      state.location = payload
    },
    setInput3: (state, {payload}) => {
      state.input3 = payload
    },
    setInput4: (state, {payload}) => {
      state.input4 = payload
    },
    setInput5: (state, {payload}) => {
      state.input5 = payload
    },
    resetStep1: (state:any) => {
      state = undefined
    },
  }
})

export const selectStep1 = (state: RootState) => state.step1;
export const {setEnergyCode, setLocation, setInput3, setInput4, setInput5, resetStep1} = step1Slice.actions;
export const step1Reducer = step1Slice.reducer;