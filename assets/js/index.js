
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const descriptionText = document.querySelector(".description-text");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            const description = card.getAttribute("data-description");
            descriptionText.textContent = description;
        });

        card.addEventListener("mouseleave", () => {
            descriptionText.textContent = "Passe o mouse sobre um card para ver a descrição.";
        });
    });
});
