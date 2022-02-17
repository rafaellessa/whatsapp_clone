FROM node:14

WORKDIR /app

COPY ./code/package.json .

RUN npm cache clean --force
RUN npm install

CMD [ "sh", "-c", "npm run start" ]