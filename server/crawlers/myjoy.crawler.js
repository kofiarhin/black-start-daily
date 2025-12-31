// server/crawlers/myjoy.crawler.js
const { PlaywrightCrawler } = require("crawlee");
const News = require("../models/news.model");

const myJoyOnline = async () => {
  const crawler = new PlaywrightCrawler({
    requestHandler: async ({ page, request, enqueueLinks }) => {
      if (request.label === "DETAILS") {
        const exists = await News.exists({ url: request.url });
        if (exists) return;

        await page.waitForSelector(".article-title h1");
        await page.waitForSelector("#article-text p");

        const title = (
          await page.locator(".article-title h1").first().textContent()
        )?.trim();

        const image =
          (await page.locator(".img-holder img").first().getAttribute("src")) ||
          (await page
            .locator(".article-title img")
            .first()
            .getAttribute("src")) ||
          null;

        const text = await page
          .locator("#article-text p")
          .allTextContents()
          .then((arr) =>
            arr
              .map((t) => t.trim())
              .filter(Boolean)
              .join("\n\n")
          );

        if (!title || !text) return;

        await News.create({
          source: "myjoyonline",
          url: request.url,
          title,
          text,
          image,
          timestamp: new Date(),
        });

        console.log("saved:", title);
        return;
      }

      const newsItemElement = ".home-post-list-title a";
      await page.waitForSelector(newsItemElement);

      await enqueueLinks({
        selector: newsItemElement,
        label: "DETAILS",
      });
    },
  });

  await crawler.run([{ url: "https://www.myjoyonline.com/", label: "LIST" }]);
};

module.exports = myJoyOnline;
