FROM node:slim
WORKDIR /app
ADD package.json .
ADD package-lock.json .
RUN npm i
ADD . .
CMD ["node", "main.js"]
