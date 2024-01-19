import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit';

export interface RegisterState {
  firstName: string;
  lastName: string;
  email: string;
  contact: number | null;
  password: string;
  confirmPassword: string;
}

interface OnChangeProps {
  name: string;
  value: string;
}

const initialState: RegisterState = {
  firstName: '',
  lastName: '',
  email: '',
  contact: null,
  password: '',
  confirmPassword: '',
};

export const parentsRegistrationSlice = createSlice({
  name: 'parentsRegistration',
  initialState,
  reducers: {
    handleOnChange: (state, action: PayloadAction<OnChangeProps>) => {
      const {value, name} = action.payload;
      state = {...state, [name]: value};
      return state;
    },
  },
});

export const {handleOnChange} = parentsRegistrationSlice.actions;
export default parentsRegistrationSlice.reducer;
