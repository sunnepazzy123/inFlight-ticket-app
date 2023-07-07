import Datatable from '../../../components/datatable/Datatable';
import { ticketColumns } from '../../../components/datatable/dataSource';
import { Paragraph } from '../../../styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

const Tickets = () => {
  const { tickets } = useSelector((state: RootState) => state.ticket);
  const handlerOption = () => {};

  return (
    <>
      <Paragraph>All Tickets</Paragraph>
      <Datatable
        list={tickets}
        column={ticketColumns}
        name='Tickets'
        handlerOption={handlerOption}
      />
    </>
  );
};

export default Tickets;
