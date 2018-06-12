FROM node:alpine
RUN apk add --update ffmpeg

ENTRYPOINT ["sh"]