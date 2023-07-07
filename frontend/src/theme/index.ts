import { createTheme } from '@mui/material';
import { ITicket } from '../store/reducers/ticket.reducer';
import moment from 'moment';

export const getSwitchTheme = (ticket: ITicket) => {
  const color = ticket.status === 'closed' ? '#bebdbb' : '#01c755';
  const theme = createTheme({
    components: {
      MuiSwitch: {
        styleOverrides: {
          root: {
            '& .MuiSwitch-track': {
              backgroundColor: color,
            },
            '& .Mui-checked + .MuiSwitch-track': {
              backgroundColor: color,
            },
          },
        },
      },
    },
  });

  return { theme, color };
};

export const getStatusColor = (ticket: ITicket) => {
  if (ticket.status === 'closed') return '#01c755';
  if (ticket.status === 'open') {
    const now = moment();
    const future = moment(ticket.deadline[1]);
    const greaterDate = moment.max(now, future);
    if (greaterDate === now) return '#df3e1b';
    if (greaterDate === future) return '#ffbc01';
  }
};
