import {
  addBooks,
  getAllBooks,
  getSingleBooks,
  updateBooks,
  deleteBooks,
} from "../controllers/books.js";
import express from "express";

const router = express.Router();

router.get("/all", getAllBooks);

router.post("/new", addBooks);

router.get("/:id", getSingleBooks);

router.put("/update/:id", updateBooks);

router.delete("/delete/:id", deleteBooks);

export default router;
