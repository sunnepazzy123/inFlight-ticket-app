import { AppDispatch } from '..';

import {
  ITicket,
  createRandomTicketFailure,
  createRandomTicketStart,
  createRandomTicketSuccess,
  createTicketFailure,
  createTicketStart,
  createTicketSuccess,
  getTicketsFailure,
  getTicketsStart,
  getTicketsSuccess,
  updateStatusTicketFailure,
  updateStatusTicketStart,
  updateStatusTicketSuccess,
} from '../reducers/ticket.reducer';
import { request } from '../../config/request';
import { errorHandler } from '../../utils/errorHandler';

export const getTicketsAction = async (dispatch: AppDispatch) => {
  dispatch(getTicketsStart());
  try {
    const { data } = await request.get(`/api/tickets`);
    dispatch(getTicketsSuccess(data));
  } catch (err: any) {
    const error = errorHandler(err);
    dispatch(getTicketsFailure(error));
  }
};

export const createTicketAction = async (
  dispatch: AppDispatch,
  ticket: ITicket
) => {
  dispatch(createTicketStart());
  try {
    const { data } = await request.post<ITicket>(`/api/tickets`, ticket);
    dispatch(createTicketSuccess(data));
    getTicketsAction(dispatch);
  } catch (err: any) {
    const error = errorHandler(err);
    dispatch(createTicketFailure(error));
  }
};

export const createRandomTicketAction = async (
  dispatch: AppDispatch,
  ticket: ITicket
) => {
  dispatch(createRandomTicketStart());
  try {
    const { data } = await request.post(`/api/tickets`, ticket);
    dispatch(createRandomTicketSuccess(data));
    getTicketsAction(dispatch);
  } catch (err: any) {
    const error = errorHandler(err);
    dispatch(createRandomTicketFailure(error));
  }
};

export const updateStatusTicketAction = async (
  dispatch: AppDispatch,
  id: string,
  ticket: Partial<ITicket>
) => {
  dispatch(updateStatusTicketStart());
  try {
    const { data } = await request.put(`/api/tickets/${id}`, ticket);
    dispatch(updateStatusTicketSuccess(data));
    getTicketsAction(dispatch);
  } catch (err: any) {
    const error = errorHandler(err);
    dispatch(updateStatusTicketFailure(error));
  }
};
