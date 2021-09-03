import express from "express";
import { getAllProducts, getProductById } from "../helper.js";
const router = express.Router();

// app.get("/users", async (request, response) => {
//   const users = await getAllUsers();
//   // console.log(result);
//   response.send(users);
// });

//get all users
router.get("/", async (request, response) => {
  const productList = await getAllProducts();
  response.send(productList);
});

//get particular user in users
router.get("/:productid", async (request, response) => {
  const { productid } = request.params;
  const productList = await getProductById(productid);
  response.send(productList);
});

export { router };
