import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcrypt";
import { router as ProductsRouter } from "./routes/products.js";

const product = express();
dotenv.config();
product.use(cors());
product.use(express.json());

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

product.use("/products", ProductsRouter);

product.delete("/products/:productid", async (request, response) => {
  const { productid } = request.params;
  const client = await createConnection();
  const productList = await client
    .db("rentalEquipments")
    .collection("productList")
    .deleteOne({ _id: ObjectId(productid) });
  response.send(productList);
});

product.post("/product/addproduct", async (request, response) => {
  const { product_name, product_picture, product_rentaltime, product_price } =
    request.body;
  const client = await createConnection();
  const product = await client
    .db("rentalEquipments")
    .collection("productList")
    .insertOne({
      product_name: product_name,
      product_picture: product_picture,
      product_rentaltime: product_rentaltime,
      product_price: product_price,
    });
  response.send(product);
});
