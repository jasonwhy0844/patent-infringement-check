# Use Node.js as base image for frontend
FROM node:14

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Install serve to serve the static files
RUN npm install -g serve

# Expose port 3000 for React app
EXPOSE 3000

# Command to serve the application
CMD ["serve", "-s", "build"]