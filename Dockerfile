FROM node:latest
# ^ choose development runtime environment
WORKDIR /app
# ^ create a working directory to start your container in 

# before beginning, if you already have an app you want to 'Dockerize',
# you'll want to separte your app by client(react,angular) and server(express)

# while working, you can check the directory directly with `docker-compose run --rm react-w-docker bash`
# this allows you to run a bash container through docker.

COPY server/package.json /app
# start by having docker copy the server dependencies 
# into the app folder of your docker container

RUN npm i 
# install the dependencies for the server from the package.json

ADD server /app
# bring over the entire server folder

RUN mkdir /client

COPY client/package.json /client
# next, we'll set up the client side in a similar way

RUN cd /client && \
  yarn
ADD client /client
# next have docker cd into the client folder and install the dependecies using yarn 
# then add the your client folder to your container

RUN cd /client && \
  yarn run build


RUN rm -fr  /app/pulic/* && \
  mv /client/build/* /app/public

RUN rm -rf /client
# finally, we'll build the production version of our app, remove the public files,
# and move our production files into it 
CMD npm start