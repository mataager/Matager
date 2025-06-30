// Function to update the favicon based on the theme
// function updateFavicon(theme) {
//   const favicon = document.getElementById("favicon");
//   if (theme === "dark") {
//     favicon.href = "./assets/img/favicons/favico2.png";
//   } else {
//     favicon.href = "./assets/img/favicons/favico1.png";
//   }
// }

// // Check the current theme and update the favicon accordingly
// function applyTheme() {
//   const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
//     ? "dark"
//     : "light";
//   updateFavicon(theme);
// }

// // Listen for changes in the theme
// window
//   .matchMedia("(prefers-color-scheme: dark)")
//   .addEventListener("change", (e) => {
//     const theme = e.matches ? "dark" : "light";
//     updateFavicon(theme);
//   });

// // Apply the theme on page load
// applyTheme();

//scrolling animation
window.addEventListener("load", function () {
  const elements = document.querySelectorAll(".text-animate");
  elements.forEach(function (element) {
    element.classList.add("show");
  });
});

window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".animate-on-scroll");
  const windowHeight = window.innerHeight;

  elements.forEach(function (element) {
    const position = element.getBoundingClientRect().top;

    if (position < windowHeight) {
      element.classList.add("show");
    }
  });
});

window.addEventListener("load", function () {
  const elements = document.querySelectorAll(".pricing-plan");
  elements.forEach(function (element) {
    element.classList.add("show");
  });
});
