# Step 1: use node.js base image
FROM node:16

# Step 2: set the working directory
WORKDIR /app

#Step 3: copy package.json and packagelock.json to install dependencies
COPY package*.json ./
RUN npm install

# Step 4: copy all the files from the application
COPY . .

#Step 5: Build the react app for production
RUN npm run build

#Step 6: serve the app using simple static server
RUN npm install -g serve
CMD ["serve", "-s", "build"]

#Step 7: Expose the port to run the app
EXPOSE 3000


