export default function collectionPage() {
  /**
   * sortbyLargeScreen()
   * This function shows and the hide sortby radio input on larger screen from 1024px
   */
  sortbyLargeScreen();
  function sortbyLargeScreen() {
    const sortBy = document.querySelector("#sortByLargeScreen");
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
   * filterSmall()
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

  /**
   * filterLargeScreen()
   * This function shows and hide filter block on larger screen from 1024px to up
   */
  filterLargeScreen();
  function filterLargeScreen() {
    const showFilters = document.querySelector("#filterLargeScreen");
    const filterBlock = document.querySelector("#filterBlock");
    const productsBlock = document.querySelector("#productsBlock");

    //Open and close filter block
    showFilters.addEventListener("click", (e) => {
      e.preventDefault();

      // on click it open and close the filter block
      if (
        filterBlock.classList.contains("lg:w-0") &&
        filterBlock.classList.contains("lg:px-0") &&
        filterBlock.classList.contains("lg:overflow-hidden") &&
        filterBlock.classList.contains("lg:opacity-0") &&
        productsBlock.classList.contains("lg:w-full")
      ) {
        filterBlock.classList.replace("lg:w-0", "lg:w-1/5");
        filterBlock.classList.replace("lg:px-0", "lg:px-4");
        filterBlock.classList.replace(
          "lg:overflow-hidden",
          "lg:overflow-visible"
        );
        filterBlock.classList.replace("lg:opacity-0", "lg:opacity-100");

        //Change the width of the products block on click
        productsBlock.classList.replace("lg:w-full", "lg:w-4/5");

        //Rotate the show filter icon from lg:rotate-0 to lg:rotate-90
        e.currentTarget.children[0].classList.replace(
          "lg:rotate-0",
          "lg:rotate-90"
        );

        // Change the name from show filter to hide filter
        e.currentTarget.children[1].innerHTML = "Hide filters";
      } else {
        filterBlock.classList.replace("lg:w-1/5", "lg:w-0");
        filterBlock.classList.replace("lg:px-4", "lg:px-0");
        filterBlock.classList.replace(
          "lg:overflow-visible",
          "lg:overflow-hidden"
        );
        filterBlock.classList.replace("lg:opacity-100", "lg:opacity-0");

        //Change the width of the products block on click
        productsBlock.classList.replace("lg:w-4/5", "lg:w-full");

        //Rotate the show filter icon from lg:rotate-90 to lg:rotate-0
        e.currentTarget.children[0].classList.replace(
          "lg:rotate-90",
          "lg:rotate-0"
        );

        // Change the name from hide filter to show filter
        e.currentTarget.children[1].innerHTML = "Show filters";
      }
      openCloseBodyFilterLarge();
      function openCloseBodyFilterLarge() {
        const filterMenus = document.querySelectorAll(".filterMenu");

        filterMenus.forEach((filterMenu, index) => {
          filterMenu.addEventListener("click", (event) => {
            event.preventDefault();
            // console.log(
            //   event.currentTarget.children[0].children[0].children[0].classList.contains(
            //     "lg:block"
            //   )
            // );
            // console.log(
            //   event.currentTarget.children[1].classList.contains("lg:hidden")
            // );

            if (
              event.currentTarget.children[0].children[0].children[0].classList.contains(
                "lg:block"
              ) &&
              event.currentTarget.children[1].classList.contains("lg:hidden")
            ) {
              // Turn plus to minus
              event.currentTarget.children[0].children[0].children[0].classList.replace(
                "lg:block",
                "lg:hidden"
              );
              event.currentTarget.children[0].children[0].children[1].classList.replace(
                "lg:hidden",
                "lg:block"
              );
              // Open the filter menu
              event.currentTarget.children[1].classList.replace(
                "lg:hidden",
                "lg:flex"
              );
            } else {
              // Turn plus to minus
              event.currentTarget.children[0].children[0].children[0].classList.replace(
                "lg:hidden",
                "lg:block"
              );
              event.currentTarget.children[0].children[0].children[1].classList.replace(
                "lg:block",
                "lg:hidden"
              );
              // Open the filter menu
              event.currentTarget.children[1].classList.replace(
                "lg:flex",
                "lg:hidden"
              );
            }
          });
        });
      }
    });
  }
}
