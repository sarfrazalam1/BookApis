import mongoose from "mongoose";


const schema = new mongoose.Schema({
    name: String,
    page: Number,
    author: String,
    description: String,
  });
  
 export const Books = mongoose.model("Books", schema);

  
   
  