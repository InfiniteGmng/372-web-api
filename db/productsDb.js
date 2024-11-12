import mysql from "mysql2/promise";
import dotenv from "dotenv";

//read in our DB configuration
dotenv.config({
  path: "./config.env",
});

const { DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD } = process.env;

//connect to the DB
const connect = await mysql.createConnection({
  host: DB_HOST,
  port: DB_PORT,
  database: DB_DATABASE,
  user: DB_USER,
  password: DB_PASSWORD,
});
console.log(`Connected to mysql on ${DB_PORT}`);

//export functions to access the db
async function getProducts() {
  const [results] = await connect.query("SELECT * FROM products");
  return results;
}

async function getProductById(id) {
  const [results] = await connect.query(
    "SELECT * FROM products WHERE productId=?",
    [id]
  );
  return results;
}

function addProduct() {}

function updateProduct() {}

function deleteProduct() {}

export default {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
