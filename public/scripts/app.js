document.addEventListener("DOMContentLoaded", function () {
  const navLinks = [
    { href: "#", text: "Home" },
    { href: "#", text: "About" },
    { href: "#", text: "Payment" },
    { href: "#", text: "Services" },
    { href: "#", text: "Contact Us" },
  ];

  const navLinksContainer = document.getElementById("navLinks");
  const mobileNavLinksContainer = document.getElementById("mobileNavLinks");

  // Create navigation links
  function createNavLink(link) {
    const linkElement = document.createElement("a");
    linkElement.href = link.href;
    linkElement.className = "relative group text-xl font-normal text-white";

    const textSpan = document.createElement("span");
    textSpan.textContent = link.text;
    linkElement.appendChild(textSpan);

    const underline = document.createElement("div");
    underline.className =
      "absolute inset-x-0 bottom-[-4px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full";
    linkElement.appendChild(underline);

    return linkElement;
  }

  // Add links to both menus
  navLinks.forEach((link) => {
    const navLink = createNavLink(link);
    [navLinksContainer, mobileNavLinksContainer].forEach((container) =>
      container.appendChild(navLink.cloneNode(true))
    );
  });

  // Create and add "Sign in" button
  function createSignInButton() {
    const button = document.createElement("a");
    button.href = "/contact";
    button.className =
      "px-6 py-3 text-xl font-medium text-dark-purple bg-lavender-purple rounded-lg transition-all hover:opacity-70";
    button.textContent = "Sign in";
    return button;
  }

  const signInButton = createSignInButton();
  navLinksContainer.appendChild(signInButton);

  const mobileSignInButton = createSignInButton();
  mobileSignInButton.className += " block w-full text-center mt-4";
  mobileNavLinksContainer.appendChild(mobileSignInButton);

  // Hamburger menu functionality
  const menuButton = document.getElementById("menuButton");
  const closeMenuButton = document.getElementById("closeMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");

  function toggleMenu() {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !isExpanded);
    mobileMenu.classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden");
  }

  menuButton.addEventListener("click", toggleMenu);
  closeMenuButton.addEventListener("click", toggleMenu);

  // Close mobile menu when clicking a link
  mobileNavLinksContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "A") toggleMenu();
  });

  // Initialize AOS (Animate On Scroll)
  AOS.init();

  // Slider button functionality
  const container = document.getElementById("comments-container");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  if (container && prevBtn && nextBtn) {
    const itemWidth = container.querySelector(".snap-center").offsetWidth;

    function scrollContainer(direction) {
      const scrollAmount = direction === "next" ? itemWidth : -itemWidth;
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }

    nextBtn.addEventListener("click", () => scrollContainer("next"));
    prevBtn.addEventListener("click", () => scrollContainer("prev"));
  }
});
