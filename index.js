import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcrypt";

const product = express();
dotenv.config();

const PORT = process.env.PORT;

product.listen(PORT, () => console.log("The server is started!", PORT));

product.get("/", (request, response) => {
  response.send("Hello MOTO!!");
});
