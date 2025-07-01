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

// Routing function for div buttons
// document.addEventListener("DOMContentLoaded", function () {
//   //make the return btn
//   // Create the return button element
//   const returnBtn = document.createElement("button");
//   returnBtn.className = "return-btn";
//   returnBtn.setAttribute("aria-label", "Return to previous page");

//   // Create the icon element
//   const icon = document.createElement("i");
//   icon.className = "bi bi-arrow-left";

//   // Add the icon to the button
//   returnBtn.appendChild(icon);

//   // Add click handler
//   returnBtn.addEventListener("click", function () {
//     window.history.back();
//   });

//   // Add the button to the end of the body
//   document.body.appendChild(returnBtn);

//   //
//   // Handle click events for div buttons
//   document.querySelectorAll(".getstarted-btn").forEach((button) => {
//     button.addEventListener("click", function () {
//       const href = this.getAttribute("data-href");
//       if (href) {
//         window.location.href = href;
//       }
//     });
//   });

//   // Add keyboard accessibility for div buttons
//   document.querySelectorAll(".getstarted-btn").forEach((button) => {
//     button.setAttribute("tabindex", "0");
//     button.addEventListener("keypress", function (e) {
//       if (e.key === "Enter" || e.key === " ") {
//         const href = this.getAttribute("data-href");
//         if (href) {
//           window.location.href = href;
//         }
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  // Check if current page is not index.html
  if (!window.location.pathname.endsWith("index.html")) {
    // Create the return button element
    const returnBtn = document.createElement("button");
    returnBtn.className = "return-btn";
    returnBtn.setAttribute("aria-label", "Return to previous page");

    // Create the icon element
    const icon = document.createElement("i");
    icon.className = "bi bi-arrow-left";

    // Add the icon to the button
    returnBtn.appendChild(icon);

    // Add click handler
    returnBtn.addEventListener("click", function () {
      window.history.back();
    });

    // Add the button to the end of the body
    document.body.appendChild(returnBtn);
  }

  // Handle click events for div buttons
  document.querySelectorAll(".getstarted-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const href = this.getAttribute("data-href");
      if (href) {
        window.location.href = href;
      }
    });
  });

  // Add keyboard accessibility for div buttons
  document.querySelectorAll(".getstarted-btn").forEach((button) => {
    button.setAttribute("tabindex", "0");
    button.addEventListener("keypress", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        const href = this.getAttribute("data-href");
        if (href) {
          window.location.href = href;
        }
      }
    });
  });
});
