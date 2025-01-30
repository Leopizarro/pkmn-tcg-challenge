# syntax=docker/dockerfile:1
FROM postgres:latest

EXPOSE 5432

COPY ./resources/database_backup.sql /docker-entrypoint-initdb.d/