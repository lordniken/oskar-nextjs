FROM node:10

WORKDIR /opt/app
COPY package*.json ./
RUN npm install

COPY . .

ENV TZ=Europe/Moscow
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN npm run build
CMD [ "npm", "start", "-p", "9900" ]