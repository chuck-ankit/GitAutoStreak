# Use the official Node.js image as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY frontend/package.json frontend/package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the frontend application files
COPY frontend/ .

# Build the React app
RUN npm run build

# Expose port 3000 for the React app
EXPOSE 3000

# Command to run the React app
CMD ["npm", "start"]
