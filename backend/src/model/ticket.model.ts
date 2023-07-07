import mongoose, { Schema } from 'mongoose';

export interface ITicket {
  client: string;
  issue: string;
  status: StatusType;
  deadline: [string];
}

export enum StatusType {
  OPEN = 'open',
  CLOSED = 'closed',
}

export interface ITicketModel extends mongoose.Model<ITicketDoc> {}

export interface ITicketDoc extends mongoose.Document {
  client: string;
  issue: string;
  status: StatusType;
  deadline: [string];
}

const ticketSchema = new Schema(
  {
    client: {
      type: String,
      required: true,
      unique: true,
    },
    issue: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: StatusType,
    },
    deadline: {
      type: [Date],
      required: true,
    },
  },
  {
    toJSON: {
      transform(docs, ret) {
        delete ret.__v;
      },
    },
  },
);

const TicketModel = mongoose.model<ITicketDoc, ITicketModel>(
  'tickets',
  ticketSchema,
);

export default TicketModel;
