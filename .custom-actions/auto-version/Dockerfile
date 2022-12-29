# Use the latest version of Node.js
#
# You may prefer the full image:
# FROM node
#
# or even an alpine image (a smaller, faster, less-feature-complete image):
# FROM node:alpine
#
# You can specify a version:
# FROM node:10-slim
FROM node:16-slim

# Labels for GitHub to read your action
LABEL "com.github.actions.name"="Automated version bump for npm packages."
LABEL "com.github.actions.description"="Automated version bump for npm packages."
# Here are all of the available icons: https://feathericons.com/
LABEL "com.github.actions.icon"="chevron-up"
# And all of the available colors: https://developer.github.com/actions/creating-github-actions/creating-a-docker-container/#label
LABEL "com.github.actions.color"="blue"

# Copy the package.json and package-lock.json
COPY package*.json ./

RUN yarn


# Copy the rest of your action's code
COPY . .

RUN yarn build
# Run `node /index.js`
RUN ls -las
ENTRYPOINT ["node", "./bin/index.js"]
