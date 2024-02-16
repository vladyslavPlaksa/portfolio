FROM node:latest

RUN apt-get update -y && apt-get upgrade -y \
    && npm install -g n \ 
    && echo "www:x:1000:1000:www:/app:/bin/bash" >> /etc/passwd

WORKDIR /app

USER www

CMD ["/bin/bash", "/app/entrypoint.sh"]
