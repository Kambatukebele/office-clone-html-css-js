class MobileSubMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  set data({ title, children }) {
    this.shadowRoot.innerHTML = ""; // Clear previous content

    const html = /*html*/ `
      <style>
        .menu-head {
          height: 4rem;
          display: flex;
          align-items: center;
          gap: 5rem;
          border-top: 1px solid #e5e7eb;
          border-bottom: 1px solid #e5e7eb;
        }
        .menu-body {
          padding: 0 1rem;
          height: calc(100vh - 4rem);
          overflow-y: auto;
        }
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 4.375rem;
          border-bottom: 1px solid #e5e7eb;
        }
        a {
          font-size: 1rem;
          font-weight: 500;
          text-transform: uppercase;
        }
      </style>

      <div class="h-screen bg-white flex-col justify-between xl:hidden">
        <!-- Sub menu head -->
        <div class="menu-head">
          <span class="block">
            <img class="w-11 h-11" src="./src/svgs/chevron-left.svg" alt="chevron-left" />
          </span>
          <span class="text-base block font-medium uppercase">${title}</span>
        </div>

        <!-- Body menu -->
        <ul class="menu-body">
          ${children
            ?.map(
              (subItem) => /*html*/ `
              <li class="mobileSubMenuList">
                <a href="#" class="text-base block font-medium uppercase">${subItem.title}</a>
                <span class="block">
                  <img class="w-11 h-11" src="./src/svgs/chevron-right.svg" alt="Chevron right icon" />
                </span>
              </li>
            `
            )
            .join("")}
        </ul>
      </div>
    `;

    this.shadowRoot.innerHTML = html;
  }
}

customElements.define("mobile-submenu", MobileSubMenu);
