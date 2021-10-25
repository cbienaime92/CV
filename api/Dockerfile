FROM node:12.18.3

LABEL version="1.0"
LABEL description="Image CV NodeJs"

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install 
COPY . .

EXPOSE 5000

CMD ["node", "bin/www"]
