
  

# Microsystem's Pokémon TCG Fullstack Challenge

  

  

The objective of this project is to develop a fullstack application (database, backend & frontend) that showcases the differents Pokémon tcg cards stored in the database.

  

This application fully dockerized (database, backend & frontend), and can be executed with the docker-compose.yaml file in the root folder.

  

  

**Database: PostgreSQL**

  

  

**Backend: NodeJs + Express + TypeORM**

The documentation of the endpoints can be found [HERE](https://documenter.getpostman.com/view/22098385/2sAYQiCoSk)

  

  

**Frontend: NextJs + MaterialUI**

  

  

## How to run the application

  

  

### Run with Docker:

  

- Make sure that you have docker already installed in your system.

  

- Make sure that your local machine's postgres service is down and the port 5432 is not being used.

  

- Paste the .env files (frontend and backend), on their respective root folder:
    - Backend: `/backend/.env`
    - Frontend: `/frontend/.env`
***make sure that both files are named `.env` on their respective folders***
  

- In the root folder of the project, execute ```docker compose up -d --build```

  

- Use ```docker ps``` to confirm that the 3 containers are running (database, frontend and backend).

  

- You can also confirm that the containers are running without errors with ```docker logs CONTAINER_NAME|CONTAINER_ID```

  

### Run without Docker:

  

- Create a new superuser named ash in psql with ```CREATE USER ash SUPERUSER;```

  

- Create a private db for the new user with ```CREATE DATABASE ash WITH OWNER ash;```
- Paste the .env files (frontend and backend), on their respective root folder:
-- Backend: `/backend/.env`
-- Frontend: `/frontend/.env`
***make sure that both files are named `.env` on their respective folders***

  

- Move to the backend folder, and there execute ```npx ts-node create-database.ts``` (a new database pkmns-database will be created).

  

- On the backend folder, install dependencies with ```npm install``` and then run the development environment with ```npm run dev```

  

- Finally, move to the frontend folder, and install dependencies with ```npm install``` and then run the development environment with ```npm run dev```

  

- The frontend should be accesible through localhost:3000, and the backend through localhost:5000.