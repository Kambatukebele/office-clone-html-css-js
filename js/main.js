import { includeHTML } from "./utils.js";
import handleHeader from "./header";
import announcement from "./announcement";
import hero from "./hero";
import featuredProducts from "./featured-products";
import announcementSecond from "./announcement-second";
import footer from "./footer";
import "../src/style.css";
import "../src/hero.css";
import "../src/featured-products.css";

document.addEventListener("DOMContentLoaded", async () => {
  await includeHTML("#header", "/components/header.html");
  await includeHTML("#footer", "/components/footer.html");
});

handleHeader();
announcement();
hero();
featuredProducts();
announcementSecond();
footer();
