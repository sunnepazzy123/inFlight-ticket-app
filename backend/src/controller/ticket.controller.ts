import { Request, Response } from 'express';
import { Orm } from '.';
import TicketModel, { ITicket } from '../model/ticket.model';
import { DatabaseError } from '../error/db.error';
import { validationResult } from 'express-validator';

export const get = async (req: Request, res: Response) => {
  const tickets = await Orm.Ticket.get();
  return res.status(200).json(tickets);
};

export const getId = async (req: Request, res: Response) => {
  const ticket = await Orm.Ticket.getId(req.params.id);
  return res.status(200).json(ticket);
};

export const create = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json(errors.array());

  const body = req.body as ITicket;

  const clientExist = await Orm.Ticket.getOne({ client: req.body.client });

  if (clientExist) throw new DatabaseError('client already exist', 400);

  const ticket = await Orm.Ticket.create(body);
  return res.status(201).json(ticket);
};

export const update = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json(errors.array());

  const ticket = await TicketModel.findOne({ _id: req.params.id });

  if (!ticket) throw new DatabaseError('Ticket not found', 400);

  ticket.client = req.body.client || ticket.client;
  ticket.status = req.body.status || ticket.status;
  ticket.issue = req.body.issue || ticket.issue;

  const updatedTicket = await ticket.save();

  if (!updatedTicket)
    throw new DatabaseError('Error during updating Ticket', 400);

  return res.status(200).json(updatedTicket);
};
