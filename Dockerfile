FROM node:lts-alpine AS build

RUN mkdir -p /app
WORKDIR /app

COPY . /app

RUN npm config set registry https://registry.npmmirror.com
RUN npm install && \
	npm run build && \
	npm cache clean --force


FROM node:lts-alpine AS run

RUN mkdir -p /app
WORKDIR /app

COPY --from=build /app/.output /app/.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]

