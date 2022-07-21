import { configureStore } from '@reduxjs/toolkit';
import filterReducer from 'modules/users/components/Filters/filterSlice';

const rootReducer = {
  filters: filterReducer,
};

export const store = configureStore({ reducer: rootReducer });
