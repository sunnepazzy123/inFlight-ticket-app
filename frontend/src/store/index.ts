import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ticketReducer from './reducers/ticket.reducer';

const rootReducer = combineReducers({
  ticket: ticketReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
