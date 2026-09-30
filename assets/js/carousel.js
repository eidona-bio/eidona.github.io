document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    if (carousel.dataset.carouselInitialized === "true") {
      return;
    }

    carousel.dataset.carouselInitialized = "true";

    const track = carousel.querySelector(".carousel-track");
    const slides = carousel.querySelectorAll(".carousel-slide");
    const prev = carousel.querySelector(".carousel-btn.prev");
    const next = carousel.querySelector(".carousel-btn.next");
    const dotsContainer = carousel.querySelector(".carousel-dots");

    if (
      !track ||
      slides.length === 0 ||
      !prev ||
      !next ||
      !dotsContainer
    ) {
      return;
    }

    const AUTOPLAY_DELAY = 8000;
    const IDLE_DELAY = 60000;

    let index = 0;
    let timer = null;
    let idleTimer = null;

    let manuallyPaused = false;
    let idleStopped = false;

    /*
     * Pause / play button
     */
    const pauseButton = document.createElement("button");
    pauseButton.className = "carousel-control-center";
    pauseButton.type = "button";
    pauseButton.setAttribute("aria-label", "Pause carousel");
    pauseButton.setAttribute("aria-pressed", "false");
    pauseButton.textContent = "Ⅱ";

    carousel.appendChild(pauseButton);

    /*
     * Dots
     */
    const dots = [];

    dotsContainer.innerHTML = "";

    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.className = "carousel-dot";
      dot.type = "button";
      dot.setAttribute("aria-label", `Go to slide ${i + 1}`);

      dot.addEventListener("click", () => {
        index = i;
        update();
        registerInteraction();
      });

      dotsContainer.appendChild(dot);
      dots.push(dot);
    });

    function update() {
      track.style.transform = `translateX(-${index * 100}%)`;

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }

    function stopAutoplay() {
      clearInterval(timer);
      timer = null;
    }

    function startAutoplay() {
      stopAutoplay();

      if (manuallyPaused || idleStopped) {
        return;
      }

      timer = setInterval(() => {
        index = (index + 1) % slides.length;
        update();
      }, AUTOPLAY_DELAY);
    }

    function resetIdleTimer() {
      clearTimeout(idleTimer);

      idleTimer = setTimeout(() => {
        idleStopped = true;
        stopAutoplay();
      }, IDLE_DELAY);
    }

    function registerInteraction() {
      /*
       * Interaction wakes the carousel if it stopped because of inactivity.
       * It does NOT override a manual pause.
       */
      idleStopped = false;

      resetIdleTimer();

      if (!manuallyPaused) {
        startAutoplay();
      }
    }

    function updatePauseButton() {
      if (manuallyPaused) {
        pauseButton.textContent = "▶";
        pauseButton.setAttribute("aria-label", "Play carousel");
        pauseButton.setAttribute("aria-pressed", "true");
      } else {
        pauseButton.textContent = "Ⅱ";
        pauseButton.setAttribute("aria-label", "Pause carousel");
        pauseButton.setAttribute("aria-pressed", "false");
      }
    }

    pauseButton.addEventListener("click", () => {
      manuallyPaused = !manuallyPaused;

      updatePauseButton();
      resetIdleTimer();

      if (manuallyPaused) {
        stopAutoplay();
      } else {
        idleStopped = false;
        startAutoplay();
      }
    });

    prev.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      update();
      registerInteraction();
    });

    next.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      update();
      registerInteraction();
    });

    /*
     * Treat keyboard / pointer interaction with the carousel as activity.
     *
     * pointerdown is preferable to pointermove here: merely moving the mouse
     * across the page should not keep the carousel alive indefinitely.
     */
    carousel.addEventListener("pointerdown", registerInteraction);
    carousel.addEventListener("keydown", registerInteraction);

    update();
    updatePauseButton();
    startAutoplay();
    resetIdleTimer();
  });
});
