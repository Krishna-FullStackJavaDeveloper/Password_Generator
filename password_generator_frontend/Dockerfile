# Step 1: Use Node.js 20 LTS base image
FROM node:20-alpine AS build

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy all frontend source files
COPY . .

# Step 6: Build React app for production
RUN npm run build

# Step 7: Use nginx to serve the production build
FROM nginx:alpine

# Copy build files to nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
