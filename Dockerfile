FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

# so we can use it globally in cli
RUN npm install -g prisma

COPY . .

CMD ["npm", "run", "dev"]