FROM node:14.17
COPY . /app
WORKDIR /app
RUN yarn
EXPOSE 5000
CMD npm start