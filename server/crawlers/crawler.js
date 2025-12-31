const myJoyOnline = require("./myjoy.crawler");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const graphicCrawler = require("./garphic.crawler");

const runCrawler = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  graphicCrawler();
};

runCrawler();
