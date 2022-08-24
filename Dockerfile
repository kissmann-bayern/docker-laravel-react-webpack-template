FROM node:13-alpine As development


WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:13-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/app ./dist

CMD ["npm", "run build"]
