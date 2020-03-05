FROM alpine/node:latest
RUN apk add zip --update
COPY ./* /app/
RUN cd /app && npm install
ENTRYPOINT ["/app/entrypoint.sh"]