
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Toggle between light and dark mode
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    const isDark = body.classList.contains("dark-mode");

    themeToggle.textContent = isDark
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";

    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );
});

// Display a message when a product is selected
const productButtons = document.querySelectorAll(".buy-btn");

productButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const productName = button
            .closest(".product-card")
            .querySelector("h3")
            .textContent;

        alert(`You selected: ${productName}`);
    });
});
