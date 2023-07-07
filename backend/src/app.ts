import { config } from 'dotenv';
config();
import express, { NextFunction, Request, Response } from 'express';
import { errorHandler } from './error';
import ticketRoutes from './routes';
import { IError } from './server';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerDocument from './swagger/swagger.json';
import cors from 'cors';

const apiSpecDoc = swaggerJsDoc(swaggerDocument);

// Creating the express app
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(apiSpecDoc));

app.use('/api', ticketRoutes);

//Global Error Handler
app.use((err: IError, req: Request, res: Response, _next: NextFunction) => {
  errorHandler(err, req, res);
});

export { app };
