const { PlaywrightCrawler } = require("crawlee");
const fs = require("fs");
const path = require("path");

const newsCrawlwer = async () => {
  // 1. Updated path to server/data/news.json
  const dataDir = path.join(__dirname, "../data");
  const filePath = path.join(dataDir, "news.json");

  // Ensure directory exists
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  const crawler = new PlaywrightCrawler({
    launchContext: {
      launchOptions: { headless: true },
    },
    // Handler for processing the pages
    requestHandler: async ({ page, enqueueLinks, request, log }) => {
      if (request.label === "DETAIL") {
        log.info(`Scraping Article: ${request.url}`);

        await page.waitForSelector(".article-title", { timeout: 15000 });

        const title = (
          await page.locator(".article-title").textContent()
        )?.trim();
        const text = (
          await page.locator("#article-text").textContent()
        )?.trim();
        const image = await page
          .locator(".article-thumb img")
          .getAttribute("src")
          .catch(() => null);

        let news = [];
        if (fs.existsSync(filePath) && fs.statSync(filePath).size > 0) {
          try {
            news = JSON.parse(fs.readFileSync(filePath, "utf-8"));
          } catch (e) {
            news = [];
          }
        }

        news.push({
          url: request.url,
          title,
          text,
          image,
          timestamp: new Date(),
        });

        // Write to server/data/news.json
        fs.writeFileSync(filePath, JSON.stringify(news, null, 2));
        console.log(`✅ Saved to news.json: ${title}`);
      } else {
        await enqueueLinks({
          selector: ".home-post-list-title a, .article-item a",
          label: "DETAIL",
        });
      }
    },
    navigationTimeoutSecs: 60,
    maxRequestsPerCrawl: 10, // Small batch for testing
  });

  await crawler.run(["https://www.myjoyonline.com"]);
};

module.exports = newsCrawlwer;
