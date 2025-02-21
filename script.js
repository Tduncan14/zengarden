document.addEventListener("DOMContentLoaded", function () {
    const dropCount = 15; // Number of ink drops
    for (let i = 0; i < dropCount; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createInkDrop(x, y);
    }
});

function createInkDrop(x, y) {
    const drop = document.createElement("div");
    drop.classList.add("ink-drop");

    // Randomize size
    const size = Math.random() * 80 + 20; // Size between 20px and 100px
    drop.style.width = `${size}px`;
    drop.style.height = `${size}px`;

    // Positioning
    drop.style.left = `${x - size / 2}px`;
    drop.style.top = `${y - size / 2}px`;

    document.body.appendChild(drop);

    // Remove drop after animation
    setTimeout(() => {
        drop.remove();
    }, 2500);
}