FROM node:18.17 as base
COPY package*.json ./
RUN npm ci
FROM base as builder

WORKDIR /home/node/app

COPY . .
COPY --from=base /home/node/app/node_modules ./node_modules

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload/payload.config.js
RUN npm run build

FROM base as runtime


WORKDIR /home/node/app
COPY package*.json  ./
COPY --from=base /home/node/app/node_modules ./node_modules

RUN npm install --production
COPY --from=builder /home/node/app/ .

EXPOSE 3000

CMD ["node", "dist/server.js"]
