import { ChangeEvent } from 'react';
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
import { ThemeProvider } from '@mui/material/styles';
import { getStatusColor, getSwitchTheme } from '../../../theme';

interface ISingleProp {
  switchStatusHandler: (id: string) => void;
  ticket: ITicket;
  index: number;
}

const Single = ({ ticket, index, switchStatusHandler }: ISingleProp) => {
  const dateFormat = moment(ticket.deadline[0]).format('YYYY-MM-DD');

  const color = getStatusColor(ticket);
  const switchTheme = getSwitchTheme(ticket);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const id = event.target.value;
    switchStatusHandler(id);
  };

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
            <ThemeProvider theme={switchTheme.theme}>
              <Switch
                size='small'
                onChange={handleChange}
                value={ticket._id}
                checked={ticket.status === 'closed' || false}
                style={{
                  color: switchTheme.color,
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
