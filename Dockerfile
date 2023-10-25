FROM node:slim

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 10000

RUN yarn build

CMD [ "yarn", "preview", "--host", "--port",  "10000" ]