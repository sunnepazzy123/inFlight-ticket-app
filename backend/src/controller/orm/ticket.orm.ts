import TicketModel, { ITicket } from '../../model/ticket.model';

export const get = async () => {
  return await TicketModel.find({});
};

export const getId = async (_id: string) => {
  return await TicketModel.findById({ _id });
};

export const getOne = async (ticket: Partial<ITicket>) => {
  return await TicketModel.findOne({}).where(ticket);
};

export const create = async (ticket: ITicket) => {
  return await TicketModel.create(ticket);
};
