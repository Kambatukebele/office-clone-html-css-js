export default function handleHeader() {
  const hamburger = document.querySelector(".hamburger");
  const closeHamburger = document.querySelector(".closeHamburger");
  const navigationOnSmallDevice = document.querySelector(
    ".navigationOnSmallDevice"
  );
  hamburger.addEventListener("click", () => {
    console.log("click");
    navigationOnSmallDevice.classList.replace(
      "translate-x-[1300px]",
      "translate-x-0"
    );
    navigationOnSmallDevice.classList.replace("opacity-0", "opacity-100");
  });
  closeHamburger.addEventListener("click", () => {
    console.log("close");
    navigationOnSmallDevice.classList.replace(
      "translate-x-0",
      "translate-x-[1300px]"
    );
    navigationOnSmallDevice.classList.replace("opacity-100", "opacity-0");
  });
  console.log(hamburger);
}
