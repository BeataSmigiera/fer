fetch("/offerData/offer.json")
  .then((response) => response.json()) // Parse JSON data
  .then((data) => {
    // Reference to the container where cards will be appended
    const container = document.getElementById("js-card-container");

    // Check if the current URL corresponds to the index page ("/" or "index.html")
    const isIndexPage =
      window.location.pathname === "/" ||
      window.location.pathname === "/index.html";

    // Check if the container exists
    if (container) {
      // Iterate through each offer object in the JSON data
      data.forEach((offer) => {
        // Create card element
        const card = document.createElement("a");
        card.href = offer.pagePath;

        // Apply different CSS classes based on where the cards will be displayed
        if (isIndexPage) {
          card.classList.add("index-card");
        } else {
          card.classList.add("offer-list-card");
        }

        // Create image element
        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = offer.imgPath;
        img.alt = offer.name;
        card.appendChild(img);

        // Create card body
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        // Create card title
        const cardTitle = document.createElement("h4");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = offer.name;
        cardBody.appendChild(cardTitle);

        // Create card content
        const cardContent = document.createElement("p");
        cardContent.classList.add("card-text");
        cardContent.textContent = offer.content;
        cardBody.appendChild(cardContent);

        // Append card body to card
        card.appendChild(cardBody);

        // Append card to container
        container.appendChild(card);
      });
    }
  })
  .catch((error) => console.error("Error fetching JSON:", error));
