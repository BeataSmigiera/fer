// Function to load navbar
function loadNavbar() {
  fetch("/pages/components/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("js-navbar").innerHTML = data;
    })
    .catch((error) => console.error("Error loading navbar:", error));
}

// Function to load footer
function loadFooter() {
  fetch("/pages/components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("js-footer").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));
}

// Call functions to load navbar and footer when the page loads
document.addEventListener("DOMContentLoaded", function () {
  loadNavbar();
  loadFooter();
});
