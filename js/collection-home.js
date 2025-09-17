document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".products-container > div"); // scrollable div
  const prevBtn = document.querySelector(".prev-arrow");
  const nextBtn = document.querySelector(".next-arrow");

  // Amount to scroll = width of one product card (plus margin)
  const productCard = document.querySelector(".product-card");
  const scrollAmount = productCard.offsetWidth + 16; // 16 = mr-2 (margin-right)

  prevBtn.addEventListener("click", () => {
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});
