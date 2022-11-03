FROM node:18.12.0-alpine3.16 as next-builder

RUN apk update

COPY ./ /app

WORKDIR /app
RUN yarn install
RUN yarn run build

FROM alpine:3.16.2 as nginx

ENV TZ=Asia/Seoul

RUN apk update

RUN apk add --no-cache bash tzdata nginx \
    && cp /usr/share/zoneinfo/$TZ /etc/localtime \
    && echo $TZ > /etc/timezone \
    && apk del tzdata

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY ./docker/nginx/config/nginx.conf /etc/nginx/nginx.conf
COPY ./docker/nginx/config/conf.d/default.conf /etc/nginx/http.d/default.conf

COPY --from=next-builder /app /var/www/html

RUN chown -R nginx.nginx /var/www/html

EXPOSE 80
CMD ["nginx","-g","daemon off;"]
