FROM node:12.18.3

LABEL version="1.0"
LABEL description="Image du CV frontend React"

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
