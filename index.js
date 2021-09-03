import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcrypt";

const product = express();
dotenv.config();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

//Make connectin to Mongo DB
export async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    return client;
  }

//To Setting the port connection
product.listen(PORT, () => console.log("The server is started!", PORT));

product.get("/", (request, response) => {
  response.send("Hello MOTO!!");
});
