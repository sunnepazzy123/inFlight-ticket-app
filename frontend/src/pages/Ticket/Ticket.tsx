import React from 'react';
import Tickets from './Tickets/Tickets';
import CreateTicket from './Create/CreateTicket';

const Ticket = () => {
  return (
    <>
      <CreateTicket />
      <Tickets />
    </>
  );
};

export default Ticket;
