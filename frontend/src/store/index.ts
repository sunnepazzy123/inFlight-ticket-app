import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ticketReducer from './reducers/ticket.reducer';

export type Fn = (arg: any) => any;

const rootReducer = combineReducers({
  ticket: ticketReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
