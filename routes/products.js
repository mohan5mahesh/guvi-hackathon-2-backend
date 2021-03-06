import express from "express";
import { getAllProducts, getProductById } from "../helper.js";
const router = express.Router();

router.get("/", async (request, response) => {
  const productList = await getAllProducts();
  response.send(productList);
});

router.get("/:productid", async (request, response) => {
  const { productid } = request.params;
  const product = await getProductById(productid);
  response.send(product);
});

export { router };
