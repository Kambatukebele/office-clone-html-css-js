export default function collectionPage() {
  /**
   * sortbyLargeScreen()
   * This function shows and the hide sortby radio input on larger screen from 1024px
   */
  sortbyLargeScreen();
  function sortbyLargeScreen() {
    const sortBy = document.querySelector("#sort-by");
    sortBy.addEventListener("click", (e) => {
      e.preventDefault();
      if (
        e.currentTarget.children[0].children[0].classList.contains(
          "lg:rotate-0"
        ) &&
        e.currentTarget.children[1].classList.contains("lg:h-0")
      ) {
        e.currentTarget.children[0].children[0].classList.replace(
          "lg:rotate-0",
          "lg:rotate-90"
        );
        e.currentTarget.children[1].classList.replace("lg:h-0", "lg:h-44");
        e.currentTarget.children[1].classList.replace(
          "lg:opacity-0",
          "lg:opacity-100"
        );
        e.currentTarget.children[1].classList.replace(
          "lg:overflow-hidden",
          "lg:overflow-visible"
        );
      } else {
        e.currentTarget.children[0].children[0].classList.replace(
          "lg:rotate-90",
          "lg:rotate-0"
        );
        e.currentTarget.children[1].classList.replace("lg:h-44", "lg:h-0");
        e.currentTarget.children[1].classList.replace(
          "lg:overflow-visible",
          "lg:overflow-hidden"
        );
      }
    });
  }

  /**
   * sortbySmallScreen()
   * This function shows and hide sortby radio input on small screen from 320px t0 1023px
   */
  sortbySmallScreen();
  function sortbySmallScreen() {
    const btnSortBy = document.querySelector("#sort-bySmall");
    const blockSortBy = document.querySelector("#sort-bySmallBlock");
    const closeSortBy = document.querySelector("#sort-bySmallCloseIcon");

    btnSortBy.addEventListener("click", () => {
      blockSortBy.classList.replace("h-0", "h-screen");
    });
    closeSortBy.addEventListener("click", () => {
      blockSortBy.classList.replace("h-screen", "h-0");
    });
  }

  /**
   * filterSmall()()
   * This function shows and hide filter on small screen from 320px t0 1023px
   */
  filterSmall();
  function filterSmall() {
    const filterSmallBtn = document.querySelector("#filterSmall");
    const filterBlock = document.querySelector("#filterSmallBlock");
    const closeFilter = document.querySelector("#filterSmallCloseIcon");
    filterSmallBtn.addEventListener("click", () => {
      filterBlock.classList.replace("h-0", "h-screen");
    });
    closeFilter.addEventListener("click", () => {
      filterBlock.classList.replace("h-screen", "h-0");
    });

    //This function toggles the filter
    function toggleFilterOnSmall() {
      //Targeting all the filter card
      const filterCards = document.querySelectorAll(".filterCard");

      //loop the filterCards
      filterCards.forEach((card, index) => {
        card.addEventListener("click", (e) => {
          e.preventDefault();
          console.log(e.currentTarget.children[0].children[1]);

          if (e.currentTarget.children[1].classList.contains("hidden")) {
            //Change the icon from plus to minus
            e.currentTarget.children[0].children[1].children[0].classList.replace(
              "block",
              "hidden"
            );
            e.currentTarget.children[0].children[1].children[1].classList.replace(
              "hidden",
              "block"
            );
            //Open the sub-filter
            e.currentTarget.children[1].classList.replace("hidden", "flex");
          } else {
            //Change the icon from minus to plus
            e.currentTarget.children[0].children[1].children[0].classList.replace(
              "hidden",
              "block"
            );
            e.currentTarget.children[0].children[1].children[1].classList.replace(
              "block",
              "hidden"
            );
            //Close the sub-filter
            e.currentTarget.children[1].classList.replace("flex", "hidden");
          }
        });
      });
    }
    toggleFilterOnSmall();
  }
}
