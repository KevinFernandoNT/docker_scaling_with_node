FROM node:alpine
WORKDIR /urs/src/index
COPY package*.json .
RUN npm ci
COPY . .
CMD [ "node", "index.js" ]
