function showPreloader(containerId) {
  const preloaderHTML = `
    <div class="preloader">
      <div class="spinner"></div>
    </div>
  `;
  document
    .getElementById(containerId)
    .insertAdjacentHTML("beforeend", preloaderHTML);
}

function hidePreloader(containerId) {
  const preloader = document.querySelector(`#${containerId} .preloader`);
  if (preloader) preloader.remove();
}
