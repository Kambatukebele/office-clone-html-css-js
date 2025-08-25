export default function handleHeader() {
  const menu = [
    {
      title: "MEN",
      children: [
        {
          title: "Category",
          children: [
            { title: "New In" },
            { title: "All men's shoes" },
            {
              title: "Trainers",
              children: [
                { title: "Black Trainers" },
                { title: "White Trainers" },
                { title: "Running Style" },
              ],
            },
            {
              title: "Shoes",
              children: [
                { title: "Loafers" },
                { title: "Casual Shoes" },
                { title: "Smart Shoes" },
                { title: "Leather Shoes" },
                { title: "Boat shoes" },
                { title: "Black Shoes" },
                { title: "Brown Shoes" },
                { title: "Clogs" },
                { title: "Slippers" },
              ],
            },
            {
              title: "Sandals",
              children: [
                { title: "Flip-flops" },
                { title: "Sliders" },
                { title: "Clogs" },
              ],
            },
            {
              title: "Boots",
              children: [
                { title: "Chelsea Boots" },
                { title: "Black Boots" },
                { title: "Brown Boots" },
                { title: "Leather Boots" },
              ],
            },
          ],
        },
        {
          title: "Brands",
          children: [
            { title: "adidas" },
            { title: "OFFICE Shoes" },
            { title: "ASICS" },
            { title: "BIRKENSTOCK" },
            { title: "Converse" },
            { title: "Crocs" },
            { title: "Dr. Martens" },
            { title: "Havaianas" },
            { title: "HOKA" },
            { title: "New Balance" },
            { title: "Nike" },
            { title: "ON" },
            { title: "Timberland" },
            { title: "VEJA" },
            { title: "UGG" },
          ],
        },
        {
          title: "Trending",
          children: [
            { title: "Holiday Shop" },
            { title: "The Festival Edit" },
            { title: "Running Styles" },
            { title: "Nike P-6000" },
            { title: "Nike Air Force" },
            { title: "New Balance 1906" },
            { title: "OFFICE loves adidas" },
            { title: "adidas Spezial" },
            { title: "adidas Campus" },
            { title: "BIRKENSTOCK Boston" },
            { title: "New season Dr Martens" },
            { title: "Occasion Shop" },
            { title: "The OFFICE gift card" },
          ],
        },
      ],
    },
    {
      title: "TRAINERS",
      children: [
        {
          title: "Brands",
          children: [
            { title: "adidas" },
            { title: "ASICS" },
            { title: "Converse" },
            { title: "HOKA" },
            { title: "New Balance" },
            { title: "Nike" },
            { title: "OFFICE" },
            { title: "ON" },
            { title: "PUMA" },
            { title: "Vans" },
            { title: "VEJA" },
            { title: "View All Brands" },
          ],
        },
        {
          title: "Trending",
          children: [
            { title: "Women's Trainers" },
            { title: "Men's Trainers" },
            { title: "Kids' Trainers" },
            { title: "Running Inspired Trainers" },
            { title: "OFFICE Design Trainers" },
            { title: "White Trainers" },
            { title: "Black Trainers" },
            { title: "Platform Trainers" },
            { title: "Trainers Under £50" },
            { title: "Trainers gift guide" },
            { title: "Shop OFFSPRING.CO.UK" },
          ],
        },
        {
          title: "Collections",
          children: [
            { title: "adidas Campus" },
            { title: "adidas Gazelle" },
            { title: "adidas Handball Spezial" },
            { title: "adidas Samba" },
            { title: "adidas SL 72" },
            { title: "adidas Low Profile" },
            { title: "ON Cloud" },
            { title: "Puma Speedcat" },
            { title: "Converse Chuck 70s" },
            { title: "New Balance 530" },
            { title: "New Balance 2002R" },
            { title: "New Balance 9060" },
            { title: "New Balance 327" },
            { title: "Nike Air Force 1" },
            { title: "Nike Air Max" },
            { title: "Nike Air Max 90" },
            { title: "Nike Shox" },
            { title: "Nike Cortez" },
            { title: "Nike P-6000" },
            { title: "Nike V2K" },
            { title: "Nike Zoom Vomero" },
          ],
        },
        {
          title: "View All Trainers",
          children: [{ title: "All Trainers" }],
        },
      ],
    },
    {
      title: "KIDS",
      children: [
        {
          title: "Category",
          children: [
            { title: "New In" },
            {
              title: "Kids Shoes",
              children: [
                { title: "Kids' Trainers" },
                { title: "Kids' Sandals" },
                { title: "Jelly Shoes" },
                { title: "Kids' Slippers" },
                { title: "Kids' Boots" },
                { title: "Kids' Wellies" },
                { title: "OFFICE Girl (Shoe sizes 2 - 5.5)" },
                { title: "OFFICE Junior (Trainer Sizes 2 - 5.5)" },
                { title: "Holiday shop" },
              ],
            },
            {
              title: "Accessories",
              children: [
                { title: "Backpacks and Bags" },
                { title: "Crocs Jibbitz" },
              ],
            },
          ],
        },
        {
          title: "Size",
          children: [
            { title: "Baby shoes (Sizes 1 - 2.5)" },
            { title: "Infant Shoes (Sizes 3 - 9.5 )" },
            { title: "Youth Shoes (Sizes 10 -2)" },
            { title: "Office girl (Shoe Sizes 2 - 5.5)" },
            { title: "Office Junior (Shoe Sizes 2 - 5.5)" },
          ],
        },
        {
          title: "School shoes",
          children: [
            { title: "Back to School" },
            { title: "Kids school shoes" },
            { title: "Girls school shoes" },
            { title: "Boys school shoes" },
            { title: "Bags & backpacks" },
            { title: "Shoe care" },
          ],
        },
        {
          title: "Brands",
          children: [
            { title: "adidas" },
            { title: "UGG" },
            { title: "Crocs" },
            { title: "BIRKENSTOCK" },
            { title: "Converse" },
            { title: "Dr. Martens" },
            { title: "EARTHCHILD" },
            { title: "Igor" },
            { title: "Kickers" },
            { title: "New Balance" },
            { title: "Nike" },
            { title: "OFFICE Kids" },
            { title: "Vans" },
          ],
        },
      ],
    },
    {
      title: "ACCESSORIES",
      children: [
        {
          title: "Accessories",
          children: [
            { title: "Shop all Accessories" },
            { title: "Socks" },
            { title: "Shoe care" },
            { title: "Women's slippers" },
            { title: "Men's slippers" },
            { title: "Bags and backpacks" },
            { title: "Caps and Hats" },
            { title: "Insoles and shoe inserts" },
            { title: "Crocs Jibbitz" },
            { title: "The OFFICE gift card" },
          ],
        },
        {
          title: "Loungewear",
          children: [
            { title: "Womens Slippers" },
            { title: "Mens Slippers" },
            { title: "Socks" },
            { title: "Womens Loungewear" },
            { title: "Mens Loungewear" },
          ],
        },
        {
          title: "Brands",
          children: [
            { title: "adidas" },
            { title: "BIRKENSTOCK" },
            { title: "Crocs" },
            { title: "Dr. Martens" },
            { title: "Liquiproof LABS" },
            { title: "New Balance" },
            { title: "Nike" },
            { title: "ON" },
            { title: "UGG" },
          ],
        },
      ],
    },
    {
      title: "BRANDS",
      children: [
        { title: "View all brands" },
        { title: "adidas" },
        { title: "BIRKENSTOCK" },
        { title: "OFFICE" },
        { title: "ON" },
        { title: "New Balance" },
        { title: "Nike" },
        { title: "UGG" },
        { title: "ALOHAS" },
        { title: "ASICS" },
        { title: "Blowfish Malibu" },
        { title: "BIRKENSTOCK EXQUISITE" },
        { title: "Converse" },
        { title: "Crocs" },
        { title: "Desert Fleur" },
        { title: "Dolce Vita" },
        { title: "Dr. Martens" },
        { title: "EARTHADDICT" },
        { title: "Flabelus" },
        { title: "G.H Bass & Co" },
        { title: "Havaianas" },
        { title: "HOKA" },
        { title: "Jordan" },
        { title: "Les Tropeziennes" },
        { title: "MIISTA" },
        { title: "PUMA" },
        { title: "Steve Madden" },
        { title: "TEVA" },
        { title: "Timberland" },
        { title: "TOMS" },
        { title: "Tony Bianco" },
        { title: "Vagabond Shoemakers" },
        { title: "Vans" },
        { title: "VEJA" },
      ],
    },
    { title: "SALE" },
  ];

  const hamburger = document.querySelector(".hamburger"); // Open menu
  const closeHamburger = document.querySelector(".closeHamburger"); // close menu
  const mobileMenu = document.querySelector(".mobileMenu"); // The menu
  const mobileMenuUl = document.querySelector(".mobileMenuUl"); //mobileMenuUl
  const subMenuComponentClass = document.querySelector(
    ".subMenuComponentClass"
  ); // subMenuComponentClass

  //call back function for the toggleMenu
  function cb() {
    if (
      mobileMenu.classList.contains("translate-x-full") &&
      mobileMenu.classList.contains("opacity-0")
    ) {
      mobileMenu.classList.replace("translate-x-full", "translate-x-0");
      mobileMenu.classList.replace("opacity-0", "opacity-100");
    } else if (
      mobileMenu.classList.contains("translate-x-0") &&
      mobileMenu.classList.contains("opacity-100")
    ) {
      mobileMenu.classList.replace("translate-x-0", "translate-x-full");
      mobileMenu.classList.replace("opacity-100", "opacity-0");
    }
  }

  function toggleMenu(menu) {
    menu.addEventListener("click", cb);
  }
  toggleMenu(hamburger);
  toggleMenu(closeHamburger);

  //Show menu items on mobile
  mobileMenuUl.innerHTML = menu
    .map((list) => {
      const { title } = list;
      return /*HTML*/ `<li
            class="mobileMenuList flex justify-between items-center h-[4.375rem] border-b border-gray-200"
          >
            <span class="text-base block font-medium uppercase">${title}</span>
            <span class="block">
              <img
                class="w-11 h-11"
                src="./src/svgs/chevron-right.svg"
                alt="Chevron right icon"
              />
            </span>
          </li>`;
    })
    .join("");

  const mobileMenuList = document.querySelectorAll(".mobileMenuList");
  mobileMenuList.forEach((el, index) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      toggleMenu(e.currentTarget.offsetParent); // This close the entire menu
      // console.log(e.currentTarget.firstElementChild.innerHTML);

      //Find the corresponding data
      let findItem = menu.find(
        (item) => item.title == e.currentTarget.firstElementChild.innerHTML
      );

      subMenuComponentClass.classList.replace(
        "translate-x-full",
        "translate-x-0"
      );
      subMenuComponentClass.classList.replace("opacity-0", "opacity-100");

      subMenuComponentClass.innerHTML = subMenuComponent(findItem);
    });
  });

  //Submenu component
  function subMenuComponent(data) {
    const { title, children } = data;
    return /* HTML */ `<div
      class="h-screen bg-white flex-col justify-between xl:hidden"
    >
      <!-- Sub menu head -->
      <div
        class="h-16 flex justify-start gap-20 items-center border-y border-gray-200"
      >
        <span class="block">
          <img
            class="w-11 h-11"
            src="./src/svgs/chevron-left.svg"
            alt="chevron-left"
          />
        </span>
        <span class="text-base block font-medium uppercase">${title}</span>
      </div>
      <!-- End Sub menu head -->
      <!-- Body menu -->
      <ul class="block px-4 h-[calc(100vh-4rem)] overflow-y-scroll">
        ${children
          ?.map((subList) => {
            const { title } = subList;

            return /*HTML*/ `<li
          class="mobileSubMenuList flex justify-between items-center h-[4.375rem] border-b border-gray-200"
        >
          <a href="#" class="text-base block font-medium uppercase">${title}</a>
          <span class="block">
            <img
              class="w-11 h-11"
              src="./src/svgs/chevron-right.svg"
              alt="Chevron right icon"
            />
          </span>
        </li>`;
          })
          .join("")}
      </ul>
      <!-- End Body menu -->
    </div>`;
  }

  //User account
  function userAccount() {
    const userIcon = document.querySelector(".userIcon");
    const userBlock = document.querySelector(".userBlock");

    userIcon.addEventListener("mouseenter", () => {
      userBlock.classList.replace("lg:top-40", "lg:top-11");
      userBlock.classList.replace("lg:opacity-0", "lg:opacity-100");
    });
    userBlock.addEventListener("mouseleave", () => {
      userBlock.classList.replace("lg:top-11", "lg:top-40");
      userBlock.classList.replace("lg:opacity-100", "lg:opacity-0");
    });
  }

  userAccount();
}
