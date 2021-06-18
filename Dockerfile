FROM node:10-alpine
RUN mkdir /app
WORKDIR /app

RUN yarn global add serve

COPY package.json /app
RUN yarn
COPY . /app
RUN yarn build

# CMD ["pm2", "serve /app/build 3000"]
CMD ["serve", "/app/build"]
