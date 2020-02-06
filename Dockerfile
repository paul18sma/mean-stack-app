FROM node:12

#Create app directory
WORKDIR /app

#Install app dependencies
COPY package*.json ./

RUN npm install

COPY . .

# Transpilate TS code to JS
RUN npm run build

WORKDIR ./dist  

EXPOSE 4000

CMD node src/index.js