import {createSlice, PayloadAction} from '@reduxjs/toolkit';
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
    addSystem: (state, action) => {
      state.push(action.payload)
    },
    removeSystem: (state, action) => {
      state.filter(system => system.systemType !== action.payload.systemType)
    }
   }
})

export const selectStep2 = (state: RootState) => state.step2;
export const {addSystem, removeSystem} = step2Slice.actions;
export const step2Reducer = step2Slice.reducer;
