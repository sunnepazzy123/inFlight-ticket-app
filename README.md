
# InFlight Dublin Recruitment Task: 
    
 I redefined all this services from scratch...

> a Backend service.
> a Frontend service.

### Application Stack

```
InMemory-MongoDB // Database,
ExpressJs // ServerSide Framework built on Node
Typescript

```

## Installation Guide Using Docker


## Steps to Build an Image
```
 Step 1: cd backend && run docker build -t <NameOfImage> .
 Step 2: cd frontend && run docker build -t <NameOfImage> .
```


## Use Docker Compose Instructions
```
 Make sure you are in the root directory where the docker-compose is located.

Step 3: To run container out of the images.

 -> docker compose up

  To stop container and remove containers

 -> docker compose down
   
```
## Installation Guide Without Docker
Install dependencies locally
```
 Step 1: cd backend && npm install && npm run start:dev
 Step 2: cd frontend && npm install && npm start

```


## Run the Frontend/Backend Application
 The Frontend app is running on http://localhost:3000
 The Backend app is running on http://localhost:8000

## Api Features

- Ticket (GET, POST, PUT)



## Backend Service Api Endpoint
```

GET ~~ http://localhost:8000/api/tickets
GET_ID ~~ http://localhost:8000/api/tickets/{id}
POST ~~ http://localhost:8000/api/tickets
PUT ~~ http://localhost:8000/api/tickets/{id}


```

## Test EndPoint using Headless Browser
```
e.g Postman

```

## Testing using Jest
```
suite environment for jest for backend
   -> cd backend && npm run test
```

## Testing using Cypress
```
suite environment for cypress for frontend
   -> cd frontend && npm start
   -> cd frontend && npx cypress open

I only have little time for this but the test suite setup is incomplete
```


## Swagger UI Api
```
    http://localhost:8000/api-docs

    i have little time for this task and i was unable to complete the swagger UI Docs and swagger api,
    it was done half way... 

```


 
