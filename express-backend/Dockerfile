FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND pacakge-lock.json are copied
COPY package*.json ./

RUN npm install

# if you are building code for production
# RUN npm ci --only=production

# Copy source files
COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]