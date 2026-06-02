FROM node:24-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY tsconfig.json ./
COPY src ./src
RUN npm run build

RUN addgroup -S yanice && adduser -S yanice -G yanice
RUN chown -R yanice:yanice /app
USER yanice

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "run", "start"]