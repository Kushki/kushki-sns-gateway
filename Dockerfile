FROM kushki/serverless
MAINTAINER Kushki <dev@kushkipagos.com>

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

# Bundle app source
COPY . /usr/src/app

RUN mkdir typings
RUN yarn run tsc:typing

RUN npm set init.author.name "dev-kushki"
RUN npm set init.author.email "dev@kushkipagos.com"
RUN echo "//registry.npmjs.org/:_authToken=" $NPM_TOKEN > ~/.npmrc
RUN echo "//registry.npmjs.org/:_authToken=" $NPM_TOKEN

EXPOSE 3000
CMD [ "yarn", "run" ]
