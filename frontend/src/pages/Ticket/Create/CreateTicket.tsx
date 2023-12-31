import { useState } from 'react';
import './create-ticket.scss';
import BasicModalDialog from '../../../components/modal/modal';
import { useSelector, useDispatch } from 'react-redux';
import { ITicket, StatusType } from '../../../store/reducers/ticket.reducer';
import {
  Button,
  Container,
  SingleTicketWrapper,
  TimeLineHeaderWrapper,
  TimeLineIconWrapper,
  Title,
  Wrapper,
} from '../../../styles';
import moment from 'moment';
import {
  createRandomTicketAction,
  createTicketAction,
  updateStatusTicketAction,
} from '../../../store/actions/ticket.action';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { faker } from '@faker-js/faker';
import { Alert } from '@mui/material';
import { RootState } from '../../../store';
import SingleTicket from '../Single/Single';

const CreateTicket = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { tickets, error } = useSelector((state: RootState) => state.ticket);

  const switchStatusHandler = (id: string) => {
    const ticket = tickets.find((ticket) => ticket._id === id);

    let payload: Partial<ITicket> = {};

    if (ticket?.status === StatusType.OPEN) {
      payload = { status: StatusType.CLOSED };
    } else {
      payload = { status: StatusType.OPEN };
    }

    updateStatusTicketAction(dispatch, id, payload);
  };

  const createTicketHandler = (ticket: ITicket) => {
    createTicketAction(dispatch, ticket);
    setOpen(!open);
  };

  const createRandomTicketHandler = () => {
    const previousDate = moment().subtract(2, 'days'); // Get the previous date
    const futureDate = moment().add(2, 'days');

    const client = faker.person.fullName();
    const deadline = [
      previousDate.format('YYYY-MM-DD'),
      futureDate.format('YYYY-MM-DD'),
    ];
    const status = StatusType.OPEN;
    const issue =
      faker.lorem.paragraph({ min: 1, max: 1 }) || ('Bug report' as string);

    const ticket = {
      client,
      deadline,
      status,
      issue,
    };

    createRandomTicketAction(dispatch, ticket);
  };

  return (
    <Container>
      <Wrapper>
        <TimeLineHeaderWrapper>
          <TimeLineIconWrapper>
            <EventOutlinedIcon style={{ color: '#264560' }} />
          </TimeLineIconWrapper>
          <Title>Timeline</Title>
        </TimeLineHeaderWrapper>
        {error && (
          <Alert severity='error' sx={{ margin: '7px' }}>
            {error}
          </Alert>
        )}
        <SingleTicketWrapper>
          {tickets.map((ticket, index) => {
            return (
              <SingleTicket
                ticket={ticket}
                key={index}
                index={index + 1}
                switchStatusHandler={switchStatusHandler}
              />
            );
          })}
        </SingleTicketWrapper>

        <>
          <Button
            type='button'
            onClick={() => setOpen(true)}
            className='bottom-create-button'
          >
            Create new
            <ChevronRightOutlinedIcon fontSize='small' />
          </Button>
          <Button
            type='button'
            className='bottom-randomly-create'
            onClick={() => createRandomTicketHandler()}
          >
            Create randomly
            <ChevronRightOutlinedIcon fontSize='small' />
          </Button>
        </>

        {open && (
          <BasicModalDialog
            open={open}
            setOpen={setOpen}
            createTicketHandler={createTicketHandler}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default CreateTicket;
