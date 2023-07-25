import puppeteer from 'puppeteer';
import express from 'express';

const app = express();

async function autoScroll(page) {
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= scrollHeight - window.innerHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}

app.get("/pdf", async (req, res) => {
    const url = req.query.target;
    const format = req.query.format || 'A4';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url, {
        waitUntil: 'networkidle2'
    });
    await page.setViewport({
        width: 1200,
        height: 800
    });
    await autoScroll(page);

    const pdf = await page.pdf({
        format: format,
        printBackground: true,
        scale: 1,
    });

    await browser.close();

    res.contentType("application/pdf");
    res.send(pdf);
});

app.listen(3000, () => {
    console.log("Server started");
});
