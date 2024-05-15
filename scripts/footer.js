// Fetch footer HTML
fetch("pages/components/footer.html")
  .then((response) => response.text())
  .then((html) => (document.getElementById("js-footer").innerHTML = html))
  .catch((error) => console.error("Error fetching footer:", error));
