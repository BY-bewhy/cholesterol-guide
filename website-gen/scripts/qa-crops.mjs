import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const url = process.argv[2] ?? "http://localhost:3000/";
const outDir = fileURLToPath(new URL("../screenshots/qa/", import.meta.url));
await mkdir(outDir, { recursive: true });

const viewports = {
  mobile: { width: 390, height: 844 },
  desktop: { width: 1440, height: 900 },
};

const browser = await chromium.launch();
for (const [vname, viewport] of Object.entries(viewports)) {
  const page = await browser.newPage({ viewport });
  await page.goto(url, { waitUntil: "networkidle" });

  await page.screenshot({ path: `${outDir}${vname}-1-hero.png` });

  await page.locator("#checker").scrollIntoViewIfNeeded();
  await page.screenshot({ path: `${outDir}${vname}-2-checker.png` });

  await page.getByText("나에게 해당하는 것을 체크해보세요").scrollIntoViewIfNeeded();
  await page.screenshot({ path: `${outDir}${vname}-3-risk.png` });

  await page.getByText("습관, 지금 몇 단계세요?").scrollIntoViewIfNeeded();
  await page.screenshot({ path: `${outDir}${vname}-4-habit-teaser.png` });

  await page.getByText("콜레스테롤 인사이트").first().scrollIntoViewIfNeeded();
  await page.screenshot({ path: `${outDir}${vname}-5-insight-teaser.png` });

  await page.locator("footer").scrollIntoViewIfNeeded();
  await page.screenshot({ path: `${outDir}${vname}-6-footer.png` });

  await page.close();
}
await browser.close();
console.log(`saved crops to ${outDir}`);
