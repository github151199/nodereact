FROM node:10 AS ui
WORKDIR /usr/src/app
COPY client/ ./client/
RUN cd client && npm install && npm run build

FROM node:10 AS server
WORKDIR /root/
COPY --from=ui /usr/src/app/client/build ./client/build
COPY server/package*.json ./server/
RUN cd server && npm install
COPY server/index.js ./server/

EXPOSE 8899

CMD ["node", "./server/index.js"]
