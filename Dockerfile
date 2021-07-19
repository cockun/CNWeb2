FROM node:14.15.1-alpine3.10 as builder
WORKDIR /app
COPY  . .
RUN npm install
# RUN yarn config delete proxy
# RUN yarn config delete https-proxy
# RUN yarn install --network-timeout 1000000
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx-custom.conf /etc/nginx/conf.d/default.conf
