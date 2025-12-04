# Use official Node.js LTS (Alpine for small size)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json for caching
COPY package*.json ./

# Install dependencies (production only)
RUN npm install --production

# Copy the rest of the source code
COPY . .

# Build TypeScript code
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Start the server from the compiled dist folder
CMD ["node", "dist/server.js"]
