FROM node:18.17 as base

FROM base as builder

WORKDIR /home/node/app
COPY package*.json ./
COPY . .
RUN npm install

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload/payload.config.js
RUN npm run build

FROM base as runtime


WORKDIR /home/node/app
COPY package*.json  ./


RUN npm install --production
COPY --from=builder /home/node/app/ .

EXPOSE 3000

CMD ["node", "dist/server.js"]
