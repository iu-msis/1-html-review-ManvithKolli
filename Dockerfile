FROM php:7.4-apache

LABEL maintaner="manvithkolli9"

WORKDIR /var/www/html

COPY app /srv/app

COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf
