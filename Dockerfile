# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG NODE_VERSION=18.18.1

################################################################################
# Stage 1: Build Vite project for production
FROM node:${NODE_VERSION} as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve Vite project using Nginx
FROM nginx:1.21 as production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

# Stage 3: Build Vite project for development
FROM node:${NODE_VERSION} as development
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Stage 4: Combine all stages and set up environment
FROM development as final
WORKDIR /app
COPY --from=production /usr/share/nginx/html ./dist
CMD ["nginx", "-g", "daemon off;"]
