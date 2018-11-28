FROM node:latest

RUN mkdir /app

WORKDIR /app

COPY . ./

RUN yarn install

CMD ["yarn", "dev"]

EXPOSE 3000
