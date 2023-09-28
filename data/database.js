import mongoose from "mongoose";


export const connectDB = () => {
    mongoose
  .connect(process.env.DB_URL, {
    dbName: "BooksApi",
  })
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log("mongo error", err));

};