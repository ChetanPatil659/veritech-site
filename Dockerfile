FROM --platform=$TARGETPLATFORM node:latest

WORKDIR /app

COPY package*.json /app/

RUN npm install --legacy-peer-deps
RUN npm install locomotive-scroll --force


COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]