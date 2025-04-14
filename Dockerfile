FROM node:22-alpine

# Variables de entorno
ENV PORT=3000

WORKDIR /usr/src/app

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN npm install

COPY . .

EXPOSE $PORT

CMD [ "node", "app.js" ]
