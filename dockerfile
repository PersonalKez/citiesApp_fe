FROM nginx
COPY citiesApp-fe /usr/share/nginx/html
EXPOSE 3000