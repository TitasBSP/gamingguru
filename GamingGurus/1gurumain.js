const scrollDownButton = document.getElementById("scrollDownButton");

// When clicked on, it executes the following command for scrolling down in the webpage
  scrollDownButton.addEventListener("click", () => {
    window.scrollBy({
      top: window.innerHeight, // Scroll by the height of the viewport
      behavior: "smooth" // Smooth scrolling animation
    });
  });