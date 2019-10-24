FROM node:lts-buster-slim

RUN mkdir -p /opt/nodeServer
WORKDIR /opt/nodeServer

COPY . /opt/nodeServer
RUN npm install

EXPOSE 80

ENTRYPOINT [ "npm", "start" ]
