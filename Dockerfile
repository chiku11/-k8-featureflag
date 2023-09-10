FROM node:lts

COPY ["app.js", "./"]

CMD ["node", "app.js"]