import { createConnection } from "./index.js";

async function getAllProducts() {
  const client = await createConnection();
  const productList = await client
    .db("rentalEquipments")
    .collection("productList")
    .find({})
    .toArray();
  return productList;
}
async function getProductById(productid) {
  const client = await createConnection();
  const productList = await client
    .db("rentalEquipments")
    .collection("productList")
    .find({ _id: ObjectId(productid) })
    .toArray();
  return productList;
}

export { getAllProducts, getProductById };
