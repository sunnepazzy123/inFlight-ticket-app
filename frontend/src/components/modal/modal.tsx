import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import moment from 'moment';
import { StatusType } from '../../store/reducers/ticket.reducer';

interface IModalProp {
  open: boolean;
  setOpen: (arg: boolean) => void;
  createTicketHandler: (ticket: any) => void;
}

export default function BasicModalDialog({
  open,
  setOpen,
  createTicketHandler,
}: IModalProp) {
  const [client, setClient] = useState<string>('');
  const [issue, setIssue] = useState<string>('');

  const close = () => {
    setOpen(false);
  };

  const submitForm = (event: any) => {
    event.preventDefault();
    const now = moment().format('YYYY-MM-DD');
    const futureDate = moment(now).add(2, 'days').format('YYYY-MM-DD');

    const payload = {
      client,
      issue,
      deadline: [now, futureDate],
      status: StatusType.OPEN,
    };
    createTicketHandler(payload);
  };

  return (
    <>
      <Modal open={open} onClose={close}>
        <ModalDialog
          aria-labelledby='basic-modal-dialog-title'
          aria-describedby='basic-modal-dialog-description'
          sx={{ maxWidth: 500 }}
        >
          <Typography id='basic-modal-dialog-title' component='h2'>
            Create new Ticket
          </Typography>

          <form onSubmit={(e) => submitForm(e)}>
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Client Name</FormLabel>
                <Input
                  autoFocus
                  required
                  onChange={(e) => setClient(e.target.value)}
                  name='client'
                />
              </FormControl>
              <FormControl>
                <FormLabel>Issue</FormLabel>
                <Input
                  required
                  onChange={(e) => setIssue(e.target.value)}
                  name='issue'
                />
              </FormControl>
              <FormControl></FormControl>
              <Button type='submit'>Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}
