import { createSlice } from '@reduxjs/toolkit';
import { tickets } from '../../dummy';

export interface TicketState {
  tickets: ITicket[];
  ticket: ITicket | null;
  isFetching: boolean;
  error: null | string;
}

export interface ITicket {
  _id?: string | number;
  client: string;
  issue: string;
  status: StatusType;
  deadline: string[];
}

export enum StatusType {
  OPEN = 'open',
  CLOSED = 'closed',
}

const ticketSlice = createSlice({
  name: 'ticket',
  initialState: {
    tickets: [...tickets],
    ticket: null,
    isFetching: false,
    error: null,
  } as TicketState,
  reducers: {
    getTicketsStart: (state) => {
      state.isFetching = true;
    },
    getTicketsSuccess: (state, action) => {
      state.tickets = action.payload;
      state.isFetching = false;
      state.error = null;
    },
    getTicketsFailure: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    },
    createTicketStart: (state) => {
      state.isFetching = true;
    },
    createTicketSuccess: (state, action) => {
      state.ticket = action.payload;
      state.isFetching = false;
    },
    createTicketFailure: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    },
    createRandomTicketStart: (state) => {
      state.isFetching = true;
    },
    createRandomTicketSuccess: (state, action) => {
      state.ticket = action.payload;
      state.isFetching = false;
      state.error = null;
    },
    createRandomTicketFailure: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    },
    updateStatusTicketStart: (state) => {
      state.isFetching = true;
    },
    updateStatusTicketSuccess: (state, action) => {
      state.ticket = action.payload;
      state.isFetching = false;
      state.error = null;
    },
    updateStatusTicketFailure: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    },
  },
});

export const {
  getTicketsStart,
  getTicketsSuccess,
  getTicketsFailure,
  createRandomTicketStart,
  createRandomTicketSuccess,
  createRandomTicketFailure,
  updateStatusTicketStart,
  updateStatusTicketSuccess,
  updateStatusTicketFailure,
  createTicketStart,
  createTicketSuccess,
  createTicketFailure,
} = ticketSlice.actions;
export default ticketSlice.reducer;
