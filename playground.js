const mongoose = require("mongoose");
require("dotenv").config();

const graphicCrawler = require("./server/services/graphic-crawler");

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await graphicCrawler(); // ✅ MUST await
  } catch (err) {
    console.log(err.message);
  } finally {
    await mongoose.connection.close(); // ✅ always close
    process.exit(0);
  }
})();
