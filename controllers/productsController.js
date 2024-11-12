import fs from "fs/promises";
import db from "./../db/productsDb.js";

export const getProd = async (req, res) => {
  const products = await db.getProducts();
  res.status(200).send({
    message: `Returning ${products.length} products`,
    products,
  });
};

export const getById = async (req, res) => {
  const id = parseInt(req.params.id);

  const result = await db.getProductById(id);

  if (result.length !== 0) {
    const product = result[0];
    res.status(200).json({
      message: `Found product with id ${id}`,
      product,
    });
  } else {
    res.status(404).json({
      message: `Record not found with id ${id}`,
    });
  }
};

export const addProd = async (req, res) => {
  const { name, description, price } = req.body;

  //read existing products
  const data = await fs.readFile("./products.json", "utf-8");

  //convert from JSON to JS object notation
  const products = JSON.parse(data);
  const product = {
    id: products.length,
    name,
    description,
    price,
  };
  products.push(product);

  await fs.writeFile(
    "./products.json",
    JSON.stringify(products, null, 2),
    "utf-8"
  );

  //let the user know the data was saved
  res.status(201).send({
    message: `Product saved with ID: ${product.id}`,
  });
};

export const updateProd = (req, res) => {};

export const delProd = (req, res) => {};
