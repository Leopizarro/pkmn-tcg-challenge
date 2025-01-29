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
        origin: `${process.env.FRONTEND_URL}`, // Allow requests from the frontend
        methods: ['GET'], // Specify allowed HTTP methods
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

    app.listen(process.env.APP_PORT, () => console.log(`SERVIDOR EN PUERTO ${process.env.APP_PORT}!`));



}).catch(error => console.log(error))
