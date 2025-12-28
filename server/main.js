const mongoose = require("mongoose");
const newsCrawlwer = require("./services/newsCrawler");
require("dotenv").config();

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("🚀 Connected to MongoDB");

    await newsCrawlwer();

    console.log("✅ Crawl completed");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
};

run();
