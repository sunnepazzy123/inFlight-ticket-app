FROM node:16

# Installing "libcurl4" because some Debian images may not come with this package installed, but is required by the mongodb binaries
RUN apt-get install libcurl4

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# Build TypeScript code
RUN npm run build

EXPOSE 8000

# Start the application
CMD [ "npm", "start" ]