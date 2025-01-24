FROM node:22-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

# docker build -t pkmns-frontend .
# docker run -d --name pkmns-frontend -p 3000:3000 pkmns-frontend