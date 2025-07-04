export default function announcementSecond() {
  const cards = document.querySelectorAll(".info-card");
  let currentIndex = 0;

  function showNextCard() {
    cards.forEach((card, index) => {
      card.classList.add("hidden");
      if (index === currentIndex) {
        card.classList.remove("hidden");
      }
    });
    currentIndex = (currentIndex + 1) % cards.length;
  }

  if (window.innerWidth < 640) {
    showNextCard(); // Show first
    setInterval(showNextCard, 5000);
  }
}
