import { Books } from "../models/booksModel.js";
import asyncHandler from "express-async-handler";

export const getAllBooks = asyncHandler(async (req, res) => {
  const books = await Books.find({});
  res.status(200).json(books);
});

export const addBooks = asyncHandler(async (req, res) => {
  console.log("the request body is :", req.body);
  const { name, page, author, description } = req.body;
  if (!name || !page || !author) {
    res.status(400);
    throw new Error("All fields are mandotery!");
  }
  const book = await Books.create({
    name,
    page,
    author,
    description,
  });
  res.status(201).json(book);
});

export const getSingleBooks = asyncHandler(async (req, res) => {
  const book = await Books.findById(req.params.id);
  if (!book) {
    res.status(404);
    throw new Error("Book Not Found");
  } 
  res.status(200).json(book);  
  
});

export const updateBooks = asyncHandler(async (req, res) => {
  const book = await Books.findById(req.params.id);
  if (!book) {
    res.status(404);
    throw new Error("Book Not Found");
  }
  await Books.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    message: "Updated Successfully",
    book,
  });
});

export const deleteBooks = asyncHandler(async (req, res) => {
  const book = await Books.findById(req.params.id);
  if (!book) {
    res.status(404);
    throw new Error("Book Not Found");
  }
  await Books.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    message: "Deleted successfully",
  });
});
