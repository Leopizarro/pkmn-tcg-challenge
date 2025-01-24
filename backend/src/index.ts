import express = require("express");
import { AppDataSource } from "./data-source"
import { json } from "body-parser";
import 'dotenv/config'

AppDataSource.initialize().then(async () => {
    console.log('---- INITIALIZING SERVER ----')
    const app = express();

    app.use(json());

    app.get('/', (req, res) => {
        res.send('Testing server :) !!');
      });

    app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.status(500).json({
            message: err.message
        });
    })

    app.listen(5000, () => console.log('SERVIDOR EN PUERTO 5000!'));



}).catch(error => console.log(error))
