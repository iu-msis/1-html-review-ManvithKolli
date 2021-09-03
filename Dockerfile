FROM php:7.4-apache

LABEL maintaner="manvithkolli9"

WORKDIR /var/www/html

COPY public .
