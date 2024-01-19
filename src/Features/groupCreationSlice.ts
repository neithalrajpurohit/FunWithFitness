import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit';

export interface GroupCreationState {
  groupName: string;
  uploadPhoto: string;
}

const initialState: GroupCreationState[] = [
  {
    groupName: '',
    uploadPhoto: '',
  },
];
interface GroupProps {
  name: string;
  value: string;
  id: number;
}

export const groupCreationSlice = createSlice({
  name: 'groupCreation',
  initialState,
  reducers: {
    handleChange: (state, action: PayloadAction<GroupProps>) => {
      const {id, value, name} = action.payload;
      state[id] = {...state[id], [name]: value};
      return state;
    },
    handleAddChild: (state, _action: PayloadAction<void>) => {
      const newState = {
        groupName: '',
        uploadPhoto: '',
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
  handleChange,
  handleAddChild,
  handleDelete,
  handleEdit,
  handleResetState,
} = groupCreationSlice.actions;
export default groupCreationSlice.reducer;
