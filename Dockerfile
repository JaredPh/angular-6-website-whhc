FROM node:8.11
MAINTAINER Jared Phayer <dev@jared.ph>

RUN mkdir -p /usr/local/app
WORKDIR /usr/local/app

COPY . .

RUN npm install -g @types/node typescript  --silent
RUN npm install --silent
RUN npm run build:prod

EXPOSE 9442

CMD [ "npm", "run", "server" ]
