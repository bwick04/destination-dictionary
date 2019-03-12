# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:8 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install --silent
COPY ./ /app/
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY --from=build-stage /app/build/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]