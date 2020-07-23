FROM node:12.14.0

# prepare directories
RUN mkdir -p /frontend/build && mkdir -p /backend/frontend_build

# frontend - install dependencies & build
WORKDIR /frontend
COPY frontend/. /frontend/.
RUN npm install --quiet
RUN npm rebuild node-sass
ARG REACT_APP_API_URL
RUN export REACT_APP_API_URL=$REACT_APP_API_URL && npm run build

# backend - install dependencies
WORKDIR /backend
COPY backend/. /backend/.
RUN npm install --quiet

# copy frontend build to the folder for serving
RUN cp -r /frontend/build/* /backend/frontend_build

ENV DOCKERIZE_VERSION v0.6.0
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

CMD dockerize -wait tcp://$DB_HOST:3306 -timeout 60m npm start
