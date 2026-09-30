function initWhatWeDoCards() {
  const grid = document.querySelector(".whatwedo-grid");

  if (!grid) {
    console.warn("whatwedo-grid not found");
    return;
  }

  const details = [...grid.querySelectorAll("details")];

  details.forEach((current) => {
    const summary = current.querySelector("summary");

    if (!summary) return;

    summary.addEventListener("click", (event) => {
      event.preventDefault();

      // Capture row positions before opening/closing changes layout
      const rowTop = current.offsetTop;

      const row = details.filter(
        (card) => Math.abs(card.offsetTop - rowTop) < 2
      );

      const shouldOpen = !current.open;

      row.forEach((card) => {
        card.open = shouldOpen;
      });
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initWhatWeDoCards);
} else {
  initWhatWeDoCards();
}
