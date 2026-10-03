<<<<<<< HEAD
FROM node:22-alpine AS build
=======
FROM docker.io/library/node:22-alpine AS builder
>>>>>>> develop

WORKDIR /app

COPY package*.json ./
<<<<<<< HEAD

RUN npm install

COPY . .

RUN npm run build


FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
=======
RUN npm ci

COPY . .
RUN npm run build

FROM docker.io/library/nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080
>>>>>>> develop

CMD ["nginx", "-g", "daemon off;"]