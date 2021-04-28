FROM node:12-slim

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN yarn

EXPOSE 4000

CMD ["yarn", "serve"]