FROM node:14

WORKDIR /app

COPY package.json /app
COPY tsconfig.json /app

RUN npm install

COPY . /app

EXPOSE 5000

CMD ["node", "start"]