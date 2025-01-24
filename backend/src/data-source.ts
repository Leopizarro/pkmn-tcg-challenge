import "reflect-metadata";
import { DataSource } from "typeorm";
import 'dotenv/config'
import { Card } from "./entity/Card";
import { Market } from "./entity/Market";
import { Image } from "./entity/Image";
import { Set } from "./entity/Set";

const portNumber: number = Number(process.env.DB_PORT);

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: portNumber,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: false,
    entities: [Card, Market, Image, Set],
    migrations: [],
    subscribers: [],
})
