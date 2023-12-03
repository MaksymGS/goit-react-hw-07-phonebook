import { createSlice } from '@reduxjs/toolkit';

const contactsSLice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return action.payload;
    },
  },
});

export const contactsReducer = contactsSLice.reducer;
export const { addContact, deleteContact } = contactsSLice.actions;
