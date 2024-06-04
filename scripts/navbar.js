// Function to load navbar
function loadNavbar() {
  fetch("/pages/components/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("js-navbar").innerHTML = data;
    })
    .catch((error) => console.error("Error loading navbar:", error));
}

// Call the function to load navbar when the page loads
document.addEventListener("DOMContentLoaded", loadNavbar);
