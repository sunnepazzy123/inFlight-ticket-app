import { body } from 'express-validator';

export const createTicketValidator = [
  body('client')
    .isString()
    .withMessage('client field must be a string')
    .trim()
    .isLength({ min: 4, max: 50 })
    .withMessage('client must be between 4 and 50 characters'),
  body('status').custom((value) => {
    const allowedValues = ['closed', 'open'];
    if (!allowedValues.includes(value))
      throw new Error('invalid enum value, Enum must be open or closed');
    // Return true to indicate the value is valid
    return true;
  }),
  body('issue')
    .isString()
    .withMessage('issue field must be a string')
    .trim()
    .isLength({ min: 4, max: 250 })
    .withMessage('issue must be between 4 and 250 characters'),

  body('deadline').isDate().withMessage('invalid date'),
];

export const updateTicketValidator = [
  body('client')
    .optional()
    .isString()
    .withMessage('client field must be a string')
    .trim()
    .isLength({ min: 4, max: 50 })
    .withMessage('client must be between 4 and 50 characters'),
  body('status').custom((value) => {
    // Define the allowed enum values
    const allowedValues = ['closed', 'open'];
    // Check if the provided value is in the allowed enum values
    if (!allowedValues.includes(value)) {
      throw new Error('invalid enum value, Enum must be open or closed');
    }
    // Return true to indicate the value is valid
    return true;
  }),
  body('issue')
    .optional()
    .isString()
    .withMessage('issue field must be a string')
    .trim()
    .isLength({ min: 4, max: 250 })
    .withMessage('issue must be between 4 and 250 characters'),
];
