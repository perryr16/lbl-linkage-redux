import {createSlice} from '@reduxjs/toolkit';
import type {RootState} from '../../app/store';
interface System {
  // id?: number;
  icon?: JSX.Element | string;
  systemType: string;
}

const initialState: System[] = []

const step2Slice = createSlice({
  name: 'step2',
  initialState,
  reducers: {
    addSystem: (state, {payload}) => {
      state.push(payload)
    },
    removeSystem: (state, {payload}) => {
      return state.filter(system => system.systemType !== payload.systemType)
    },
    resetStep2: () => {
      return initialState
    }
   }
})

export const selectStep2 = (state: RootState) => state.step2;
export const {addSystem, removeSystem, resetStep2} = step2Slice.actions;
export const step2Reducer = step2Slice.reducer;
