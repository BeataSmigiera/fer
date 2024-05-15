// Fetch navbar HTML
fetch("pages/components/navbar.html")
  .then((response) => response.text())
  .then((html) => (document.getElementById("js-navbar").innerHTML = html))
  .catch((error) => console.error("Error fetching navbar:", error));
