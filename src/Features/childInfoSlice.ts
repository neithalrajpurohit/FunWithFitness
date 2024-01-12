import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit';
import _ from 'lodash';
export interface RegisterState {
  childFirstName: string;
  childLastName: string;
  dob: number | null;
  gender: string;
  height: number | null;
  weight: number | null;
  nickName: string;
}
interface OnChangeProps {
  id: number;
  name: string;
  value: string;
}
const initialState: RegisterState[] = [
  {
    childFirstName: '',
    childLastName: '',
    dob: null,
    gender: '',
    height: null,
    weight: null,
    nickName: '',
  },
];
export const childInfoSlice = createSlice({
  name: 'childInfo',
  initialState,
  reducers: {
    handleOnChange: (state, action: PayloadAction<OnChangeProps>) => {
      const {id, value, name} = action.payload;
      state[id] = {...state[id], [name]: value};
    },
    handleAddChild: (state, _action: PayloadAction<void>) => {
      const newState = {
        childFirstName: '',
        childLastName: '',
        dob: null,
        gender: '',
        height: null,
        weight: null,
        nickName: '',
      };
      state.push(newState);
    },

    handleDelete: (state, action: PayloadAction<{id: number}>) => {
      const {id} = action.payload;
      if (state.length >= 1) {
        const updatedState = state.filter((item, index: number) =>
          id === index ? false : true,
        );

        console.log(updatedState, 'kkjkb');
        state = updatedState;
        return state;
      }
    },
  },
});

export const {handleOnChange, handleAddChild, handleDelete} =
  childInfoSlice.actions;
export default childInfoSlice.reducer;
