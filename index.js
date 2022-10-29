mobileNav();

function mobileNav() {
  document
    .getElementsByClassName("mobileBars")[0]
    .addEventListener("click", () => {
      if (
        document
          .getElementsByClassName("nav_links_mobile")[0]
          .classList.contains("navOpacity")
      ) {
        document
          .getElementsByClassName("nav_links_mobile")[0]
          .classList.remove("navOpacity");
      } else {
        document
          .getElementsByClassName("nav_links_mobile")[0]
          .classList.add("navOpacity");
      }
    });
}
