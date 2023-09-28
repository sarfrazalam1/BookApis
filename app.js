import express from "express";
import booksRouter from "./routes/books.js";
import { connectDB } from "./data/database.js"
import dotenv from 'dotenv';
import { errorHandler } from "./middleware/Error.js";
dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use("/books", booksRouter);
app.use(errorHandler);
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

