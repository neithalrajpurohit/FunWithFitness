import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit';

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
      return state;
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
        state = updatedState;
        return state;
      }
    },
    handleEdit: (
      state,
      action: PayloadAction<{id: number; name: string; value: any}>,
    ) => {
      const {id, name, value} = action.payload;

      // Check if the id is within the valid range of the array
      if (id >= 0 && id < state.length) {
        const updatedState = state.map((item, index) => {
          if (index === id) {
            return {...item, [name]: value};
          } else {
            return item;
          }
        });
        state = updatedState;
        return updatedState;
      }

      // If the id is not valid, return the original state
      return state;
    },
    handleResetState: (_state, _action: PayloadAction<void>) => {
      return [...initialState];
    },
  },
});

export const {
  handleOnChange,
  handleAddChild,
  handleDelete,
  handleEdit,
  handleResetState,
} = childInfoSlice.actions;
export default childInfoSlice.reducer;
