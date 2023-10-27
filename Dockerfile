FROM node:17-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 5176

RUN yarn build

CMD [ "yarn", "dev", "--host", "--port",  "5176" ]
