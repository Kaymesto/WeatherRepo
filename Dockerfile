FROM node:alpine as build
WORKDIR /react/
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=build /react/build/ /usr/share/nginx/html