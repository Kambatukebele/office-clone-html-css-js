import { includeHTML } from "./utils.js";
import productPage from "./productPage.js";
import "../src/style.css";
import "../src/hero.css";
import "../src/featured-products.css";

document.addEventListener("DOMContentLoaded", async () => {
  await includeHTML("#header", "/components/header.html");
  await includeHTML("#footer", "/components/footer.html");
});

productPage();
