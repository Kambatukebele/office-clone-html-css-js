import { includeHTML } from "./utils.js";
import collectionPage from "./collection-page.js";
import "../src/style.css";
import "../src/hero.css";
import "../src/featured-products.css";

document.addEventListener("DOMContentLoaded", async () => {
  await includeHTML("#header", "/components/header.html");
  await includeHTML("#footer", "/components/footer.html");
});

collectionPage();
