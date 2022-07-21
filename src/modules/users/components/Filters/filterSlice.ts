import { createSlice } from '@reduxjs/toolkit';
import { IUserParams } from 'models/user';

const initialState = {
  address: '',
  country: '',
  date_range: [],
  date_type: '',
  memberships: [],
  order_by: '',
  phone: '',
  search: '',
  state: '',
  status: [],
  types: [],
  tz: 0,
} as IUserParams;

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterSearchEmail(state, action) {
      state.search = action.payload;
    },
    filterMemberShips(state, action) {
      state.memberships.concat(action.payload);
    },
    filterTypes(state, action) {
      state.types.push(action.payload);
    },
  },
});
export const { filterSearchEmail, filterMemberShips, filterTypes } = filterSlice.actions;
export default filterSlice.reducer;
