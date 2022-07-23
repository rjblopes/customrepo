FROM node:16.16-alpine3.15 as base

WORKDIR /app

COPY ./package.json ./package.json
COPY ./common/package.json ./common/package.json
COPY ./lib2/package.json ./lib2/package.json
RUN npm i -w lib2



FROM node:16.16-alpine3.15 as build

WORKDIR /app

COPY ./tsconfig.json .
COPY ./common ./common
COPY ./lib2 ./lib2
COPY --from=base app/ .
RUN npx tsc -b lib2



FROM node:16.16-alpine3.15 as app

WORKDIR /app

COPY --from=build app/ .
RUN npm i --only prod -w lib2

WORKDIR /app/lib2

CMD [ "node", "build/index.js" ]
