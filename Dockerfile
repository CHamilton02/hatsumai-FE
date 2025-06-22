FROM node:22-alpine

WORKDIR /app

# Copy the package.json and package-lock.json file
COPY package*.json .

# Install app dependencies
RUN npm install

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 5173

# Run the application.
CMD [ "npm", "start" ]
