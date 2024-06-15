FROM nginx
RUN chown nginx:nginx /usr/share/nginx/html/*
COPY citiesApp-fe /usr/share/nginx/html