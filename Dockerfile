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
RUN rm -f ./typings/modules/aws-lambda/index.d.ts

EXPOSE 3000
CMD [ "yarn", "run" ]
