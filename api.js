import express from "express";
// import productRouter from "./routers/productsRouter.js";
import jokesRouter from "./routers/jokesRouter.js";

const app = express();

//serve up static files from the /public directory
app.use(express.static("./public"));

//configure your web server to parse JSON in a request body
app.use(express.json());

//mount the router!
// app.use("/api/v1/products", productRouter);
app.use("/api/v1/jokes", jokesRouter);

app.listen(4242, () => console.log(`Server started on port 4242`));
