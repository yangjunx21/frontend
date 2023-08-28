# Stage 1: Build the Vue app
FROM node:18-slim AS build

ENV HOME=/opt/app

# Set frontend directory as workdir but copy the entire context
WORKDIR $HOME/frontend

# Copy entire project context
COPY . .

# Install dependencies and build your Vue app
RUN npm i && npm run generate

# Stage 2: Serve the built project using nginx
FROM nginx:1.22-alpine

ENV HOME=/opt/app

WORKDIR $HOME

# Copy built Vue app to nginx directory
COPY --from=build /opt/app/frontend/dist $HOME/dist

# Ensure the nginx config file is available in your project context
COPY frontend-dev/nginx /etc/nginx/conf.d/

EXPOSE 80