document.addEventListener("DOMContentLoaded", function () {
  const requestsUrl =
    "https://matager-f1f00-default-rtdb.firebaseio.com/requests.json";
  const reportsUrl =
    "https://matager-f1f00-default-rtdb.firebaseio.com/reports.json";
  const storesUrl =
    "https://matager-f1f00-default-rtdb.firebaseio.com/Stores.json";

  // Fetch number of requests
  fetch(requestsUrl)
    .then((response) => response.json())
    .then((data) => {
      const numRequests = Object.keys(data || {}).length;
      document.getElementById("Requestsnum").textContent = numRequests;
    })
    .catch((error) => console.error("Error fetching requests:", error));

  // Fetch number of reports
  fetch(reportsUrl)
    .then((response) => response.json())
    .then((data) => {
      const numReports = Object.keys(data || {}).length;
      document.getElementById("reportsnum").textContent = numReports;
    })
    .catch((error) => console.error("Error fetching reports:", error));

  // Fetch number of stores
  fetch(storesUrl)
    .then((response) => response.json())
    .then((data) => {
      const numStores = Object.keys(data || {}).length;
      document.getElementById("storesnum").textContent = numStores;
    })
    .catch((error) => console.error("Error fetching stores:", error));
});


