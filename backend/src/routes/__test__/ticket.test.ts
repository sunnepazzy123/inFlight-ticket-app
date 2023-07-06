import request from 'supertest';
import { app } from '../../app';

it('it return a 201 on successful ticket create', async () => {
  return request(app)
    .post('/api/tickets')
    .send({
      status: 'closed',
      client: 'Sunday Odibo',
      deadline: '2023-06-08',
      issue: 'Bug report',
    })
    .expect(201);
});

it('it return a 400 on client with character less than 4 or more than 50', async () => {
  return request(app)
    .post('/api/tickets')
    .send({
      status: 'closed',
      client: 'Su',
      deadline: '2023-06-08',
      issue: 'Bug report',
    })
    .expect(400);
});

it('it return a 400 on status with character of invalid enum of ("open", "closed")', async () => {
  return request(app)
    .post('/api/tickets')
    .send({
      status: 'close',
      client: 'Sunday Odibo',
      deadline: '2023-06-08',
      issue: 'Bug report',
    })
    .expect(400);
});

it('it return a 400 with missing client, status, deadline, issue', async () => {
  await request(app).post('/api/tickets').send({}).expect(400);
});

it('it return a 400 with duplicated client', async () => {
  await request(app).post('/api/tickets').send({
    status: 'closed',
    client: 'Sunday Odibo',
    deadline: '2023-06-08',
    issue: 'Bug report',
  });
  await request(app)
    .post('/api/tickets')
    .send({
      status: 'closed',
      client: 'Sunday Odibo',
      deadline: '2023-06-08',
      issue: 'Bug report',
    })
    .expect(400);
});
