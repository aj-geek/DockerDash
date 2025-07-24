FROM node:22

WORKDIR /app

#Copy the package.json and package-lock.json
COPY package*.json .

#Install dependencies
RUN npm ci

#Copy source code
COPY index.js index.js

EXPOSE 3000

CMD ["node", "index.js"]