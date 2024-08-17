FROM node:latest
RUN npm install -g json-server
WORKDIR /data
CMD ["json-server", "db.json", "--port", "3000", "--host", "0.0.0.0"]