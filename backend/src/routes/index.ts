import express from 'express';
const router = express.Router();
import { tryCatch } from '../error/tryAndCatch';
import { TicketController } from '../controller';
import { createTicketValidator, updateTicketValidator } from '../validators';

router.get('/tickets', tryCatch(TicketController.get));
router.get('/tickets/:id', tryCatch(TicketController.getId));
router.post(
  '/tickets',
  createTicketValidator,
  tryCatch(TicketController.create),
);
router.put(
  '/tickets/:id',
  updateTicketValidator,
  tryCatch(TicketController.update),
);

export default router;
