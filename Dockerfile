FROM ubuntu:latest

RUN apt-get update

RUN apt-get -y install curl

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash

RUN apt-get -y install nodejs

WORKDIR /usr/src/hls-server

COPY app.js package.json package-lock.json ./

RUN npm install

WORKDIR /usr/src/hls-server/hls

ADD hls/ ./