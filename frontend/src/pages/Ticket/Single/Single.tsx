import React from 'react';
import {
  Paragraph,
  SwitchWrapper,
  TicketItemHeaderWrapper,
  TicketItemWrapper,
  TicketMessage,
} from '../../../styles';
import { Radio, Switch } from '@mui/material';
import { ITicket } from '../../../store/reducers/ticket.reducer';
import moment from 'moment';
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface ISingleProp {
  switchModeHandler: (arg: any) => void;
  ticket: ITicket;
  index: number;
}

const Single = ({ ticket, index, switchModeHandler }: ISingleProp) => {
  const dateFormat = moment(ticket.deadline[0]).format('YYYY-MM-DD');
  const trackColor = ticket.status === 'closed' ? '#bebdbb' : '#01c755';

  const getColor = (ticket: ITicket) => {
    if (ticket.status === 'closed') return '#01c755';
    if (ticket.status === 'open') {
      const now = moment();
      const future = moment(ticket.deadline[1]);
      const greaterDate = moment.max(now, future);
      if (greaterDate === now) return '#df3e1b';
      if (greaterDate === future) return '#ffbc01';
    }
  };

  const color = getColor(ticket);

  const handleChange = (event: any) => {
    event.preventDefault();
    const id = event.target.value;
    switchModeHandler(id);
  };

  const theme = createTheme({
    components: {
      MuiSwitch: {
        styleOverrides: {
          root: {
            '& .MuiSwitch-track': {
              backgroundColor: trackColor,
            },
            '& .Mui-checked + .MuiSwitch-track': {
              backgroundColor: trackColor,
            },
          },
        },
      },
    },
  });

  return (
    <>
      <TicketItemWrapper>
        <TicketItemHeaderWrapper>
          <div>
            <Paragraph>{index + '. ' + ticket.client}</Paragraph>
          </div>
          <div>
            <Paragraph>{dateFormat}</Paragraph>
          </div>

          <SwitchWrapper>
            <ThemeProvider theme={theme}>
              <Switch
                size='small'
                onChange={handleChange}
                value={ticket._id}
                checked={ticket.status === 'closed' || false}
                style={{
                  color: ticket.status === 'closed' ? '#bebdbb' : '#01c755',
                }}
              />
            </ThemeProvider>

            <Radio
              checked={true}
              value={ticket.status}
              name='radio-buttons'
              style={{ color }}
            />
          </SwitchWrapper>
        </TicketItemHeaderWrapper>

        <TicketMessage>{ticket.issue}</TicketMessage>
      </TicketItemWrapper>
    </>
  );
};

export default Single;
