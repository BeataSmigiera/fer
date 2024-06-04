// Function to load footer
function loadFooter() {
  fetch("/pages/components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("js-footer").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));
}

// Call the function to load footer when the page loads
document.addEventListener("DOMContentLoaded", loadFooter);
