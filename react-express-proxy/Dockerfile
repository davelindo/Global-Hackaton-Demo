# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:8.12.0

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

# Copy all local files into the image.
COPY . .

# Install `serve` to run the application.
RUN npm install

# Set the command to start the node server.
CMD [ "npm", "start" ]

# Tell Docker about the port we'll run on.
EXPOSE 2000