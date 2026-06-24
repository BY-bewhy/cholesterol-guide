import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const url = process.argv[2] ?? "http://localhost:3000/styleguide";
const slug =
  process.argv[3] ??
  (new URL(url).pathname.replace(/^\/|\/$/g, "") || "home");
const outDir = fileURLToPath(new URL("../screenshots/", import.meta.url));
await mkdir(outDir, { recursive: true });

const viewports = {
  mobile: { width: 390, height: 844 },
  desktop: { width: 1440, height: 900 },
};

const browser = await chromium.launch();
for (const [name, viewport] of Object.entries(viewports)) {
  const page = await browser.newPage({ viewport });
  await page.goto(url, { waitUntil: "networkidle" });
  const filePath = path.join(outDir, `${slug}-${name}.png`);
  await page.screenshot({ path: filePath, fullPage: true });
  console.log(`saved ${filePath}`);
  await page.close();
}
await browser.close();
