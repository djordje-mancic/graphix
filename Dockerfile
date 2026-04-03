FROM node:25
WORKDIR /app
COPY . .
RUN chmod +x ./entrypoint.sh
RUN mkdir -p graphics
RUN npm i --frozen-lockfile
RUN npm run build
EXPOSE 3000
ENTRYPOINT ["sh", "./entrypoint.sh"]