FROM node:16.16-alpine3.15 as base

WORKDIR /app

COPY ./package.json ./package.json
COPY ./common/package.json ./common/package.json
COPY ./lib1/package.json ./lib1/package.json
RUN npm i -w lib1



FROM node:16.16-alpine3.15 as build

WORKDIR /app

COPY ./tsconfig.json .
COPY ./common ./common
COPY ./lib1 ./lib1
COPY --from=base app/ .
RUN npx tsc -b lib1



FROM node:16.16-alpine3.15 as app

WORKDIR /app

COPY --from=build app/ .
RUN npm i --only prod -w lib1

WORKDIR /app/lib1

CMD [ "node", "build/index.js" ]
