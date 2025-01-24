# syntax=docker/dockerfile:1
FROM postgres:latest

EXPOSE 5432

COPY database_backup.sql /docker-entrypoint-initdb.d/