const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const News = require("./server/models/news.model");

const run = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`connected to database: ${conn.connection.host}`);
    const news = await News.find();
    console.log({ news });
  } catch (error) {
    console.log({ message: error.message });
  }
};

run();
