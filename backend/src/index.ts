import express = require("express");
import { AppDataSource } from "./data-source";
import { json } from "body-parser";
import setRoutes from './routes/sets';
import cardRoutes from './routes/cards';
import 'dotenv/config'

const cors = require('cors');

AppDataSource.initialize().then(async () => {
    console.log('---- INITIALIZING SERVER ----')
    const app = express();

    app.use(json());

    app.use(cors({
        origin: 'http://localhost:3000', // Allow requests from your frontend
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
        credentials: true, // Include credentials (cookies, authorization headers, etc.)
      }));

    app.use('/sets', setRoutes);
    app.use('/cards', cardRoutes);

    app.get('/', (req, res) => {
        res.send('Server up !! :)');
      });

    app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.status(500).json({
            message: err.message
        });
    })

    app.listen(5000, () => console.log('SERVIDOR EN PUERTO 5000!'));



}).catch(error => console.log(error))
