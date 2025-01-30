# Prueba Fullstack - Pokémon TCG API y Frontend

¡Bienvenido a la prueba técnica para desarrolladores Fullstack! En esta prueba, trabajarás con una base de datos que contiene información de los sets y cartas del juego Pokémon TCG. Tu objetivo será construir un backend con una API REST y un frontend para listar y visualizar esta información. 

## Objetivo de la Prueba

1. **Backend**:
   - Implementar un backend con una API REST utilizando la base de datos provista (PostgreSQL).
   - Construir endpoints para listar:
     - Los sets disponibles.
     - Las cartas correspondientes a cada set.
     - (Opcional) Información detallada de una carta específica.

2. **Frontend**:
   - Construir una aplicación web para:
     - Listar los sets disponibles.
     - Mostrar las cartas correspondientes a cada set.
     - (Opcional) Visualizar información detallada de una carta en una vista individual.

3. **Infraestructura**:
   - Usar Docker para la configuración del entorno de desarrollo, incluyendo la base de datos y la API.

## Requisitos

### Obligatorios
- Backend en **Node.js**, **Python** (Flask/Django), o cualquier lenguaje de tu preferencia.
- Frontend en **React**, **Vue**, **Nextjs** o **Astro**.
- Documentación clara de los endpoints en el backend.

### Suma Puntos
Sabemos que tu tiempo es valioso!, asi que si si logras implementar alguno de estos aspectos podrás sumar algunos punto extras

- Implementar una vista individual para cada carta en el frontend.
- Añadir un buscador o filtro en el frontend para buscar cartas por nombre, rareza, o tipo.
- Usar Tailwind para estilizar el frontend.
- Desplegar la base de datos PostgreSQL mediante Docker.
- Desplegar la aplicación mediante Docker.

## Base de Datos
El esquema de la base de datos contiene las siguientes tablas:

1. **set**:
   - Información sobre los sets de cartas (nombre, serie, cantidad total, fecha de lanzamiento, etc.).

2. **card**:
   - Información de las cartas (nombre, supertipo, subtipo, rareza, etc.).
   - Relación con un set específico.

3. **image**:
   - URLs de imágenes de las cartas.

4. **market**:
   - Información del mercado relacionada con las cartas.

Puedes ver el esquema completo en el archivo `resources/database-diagram.png` incluido.

## Instrucciones

1. **Configuración del Entorno**:
   - Clona este repositorio.
   - Carga la base de datos en PostgreSQL usando el backup incluido (`database_backup.sql`).
   - (Opcional) Configura un contenedor Docker para la base de datos.

2. **Backend**:
   - Configura tu backend para conectarse a la base de datos PostgreSQL.
   - Implementa los siguientes endpoints:
     - `GET /sets`: Lista todos los sets.
     - `GET /sets/:id/cards`: Lista todas las cartas de un set específico.
     - (Opcional) `GET /cards/:id`: Devuelve información detallada de una carta.

3. **Frontend**:
   - Construye una interfaz de usuario que:
     - Liste los sets disponibles.
     - Muestra las cartas de un set seleccionado.
     - (Opcional) Visualiza información detallada de una carta.

4. **Ejecución**:
   - Proporciona instrucciones claras en este archivo para ejecutar la aplicación.
   - (Opcional) Usa Docker Compose para levantar la base de datos, el backend y el frontend.

## Entrega

Por favor, entrega tu solución de la siguiente manera:
- Un repositorio en GitHub con el código del backend, frontend, y los archivos de configuración de Docker.
- Instrucciones claras en este archivo para ejecutar la aplicación.
- (Opcional) Un enlace a un despliegue funcional (por ejemplo, en Heroku, Vercel, o similares).
- **Tienes 1 semana para entregar una vez aceptado el desafío**

## Evaluación

Se evaluará:
- Correcta implementación de los endpoints requeridos.
- Funcionalidad y diseño del frontend.
- Organización y claridad del código.
- Documentación.
- Implementación de las características opcionales (si aplica).

¡Buena suerte y que la creatividad te acompañe!
  

# Microsystem's Pokémon TCG Fullstack Challenge

  

  

The objective of this project is to develop a fullstack application (database, backend & frontend) that showcases the differents Pokémon tcg cards stored in the database.

  

This application fully dockerized (database, backend & frontend), and can be executed with the docker-compose.yaml file in the root folder.

  

  

- **Database: PostgreSQL**

  

  

- **Backend: NodeJs + Express + TypeORM**

    - The documentation of the endpoints can be found [HERE](https://documenter.getpostman.com/view/22098385/2sAYQiCoSk)

  

  

- **Frontend: NextJs + MaterialUI**

  

  

## How to run the application

  

  

### Run with Docker:

  

- Make sure that you have docker already installed in your system.

  

- Make sure that your local machine's postgres service is down and the port 5432 is not being used.

  

- Paste the .env files (frontend and backend), on their respective root folder:
    - Backend: `/backend/.env`
    - Frontend: `/frontend/.env`
    - ***make sure that both files are named `.env` on their respective folders***
  

- In the root folder of the project, execute ```docker compose up -d --build```

  

- Use ```docker ps``` to confirm that the 3 containers are running (database, frontend and backend).

  

- You can also confirm that the containers are running without errors with ```docker logs CONTAINER_NAME|CONTAINER_ID```

  

### Run without Docker:

  

- Create a new superuser named ash in psql with ```CREATE USER ash SUPERUSER;```

  

- Create a private db for the new user with ```CREATE DATABASE ash WITH OWNER ash;```
- Paste the .env files (frontend and backend), on their respective root folder:
    - Backend: `/backend/.env`
    - Frontend: `/frontend/.env`
    - ***make sure that both files are named `.env` on their respective folders***

  

- Move to the backend folder, and there execute ```npx ts-node create-database.ts``` (a new database pkmns-database will be created).

  

- On the backend folder, install dependencies with ```npm install``` and then run the development environment with ```npm run dev```

  

- Finally, move to the frontend folder, and install dependencies with ```npm install``` and then run the development environment with ```npm run dev```

  

- The frontend should be accesible through localhost:3000, and the backend through localhost:5000.