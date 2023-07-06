import React from 'react';
import Datatable from '../../../components/datatable/Datatable';
import { ticketColumns } from '../../../components/datatable/dataSource';
import { Paragraph } from '../../../styles';

const Tickets = () => {
  const handlerOption = () => {
    console.log('jsdkdjs');
  };
  return (
    <>
      <Paragraph>All Tickets</Paragraph>
      <Datatable
        list={[]}
        column={ticketColumns}
        name='Tickets'
        handlerOption={handlerOption}
      />
    </>
  );
};

export default Tickets;
