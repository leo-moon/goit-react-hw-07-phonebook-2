import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

import {
  fetchAllContactsLoading,
  fetchAllContactsSuccess,
  fetchAllContactsError,
  fetchAddContactLoading,
  fetchAddContactSuccess,
  fetchAddContactError,
  fetchDeleteContactLoading,
  fetchDeleteContactSuccess,
  fetchDeleteContactError,
} from './contacts-actions';

const initialState = {
  items: [
    // { id: nanoid(), name: 'Eden Clements', number: '645-17-79', friend: true },
    // { id: nanoid(), name: 'Annie Copeland', number: '645-45-85', friend: true },
    // { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56', friend: false },
    // { id: nanoid(), name: 'Hermione Kline', number: '443-89-12', friend: true },
  ],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchAllContactsLoading]: store => {
      store.loading = true;
    },
    [fetchAllContactsSuccess]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [fetchAllContactsError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [fetchAddContactLoading]: store => {
      store.loading = true;
    },
    [fetchAddContactSuccess]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    [fetchAddContactError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [fetchDeleteContactLoading]: store => {
      store.loading = true;
    },
    [fetchDeleteContactSuccess]: (store, { payload }) => {
      store.loading = false;
      const index = store.items.findIndex(({ id }) => id === payload);
      store.items.splice(index, 1);
    },
    [fetchDeleteContactError]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

// export const { addContacts, deleteContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
