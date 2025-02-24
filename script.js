// document.addEventListener("DOMContentLoaded", function () {
//     const textElement = document.querySelector(".sidebar");
//     const text = textElement.textContent.trim();
//     textElement.textContent = ""; // Clear text
//     textElement.style.visibility = "visible";

//     let i = 0;
//     function typeText() {
//         if (i < text.length) {
//             textElement.textContent += text[i];
//             i++;
//             setTimeout(typeText, 5); // Super fast typing speed (5ms)
//         }
//     }
//     typeText();
// });

document.addEventListener("DOMContentLoaded", function () {
    const text = " From Tannaya ,";
    let i = 0;

    // Function to update the content of the ::before pseudo-element
    function typeTannaya() {
        if (i < text.length) {
            document.querySelector(".intro").style.setProperty(
                '--pseudo-content',
                `"${text.substring(0, i + 1)}"`
            );
            i++;
            setTimeout(typeTannaya, 200); // Adjust speed here
        }
    }

    // Start the typing effect
    typeTannaya();
});

// document.addEventListener("DOMContentLoaded", function () {
//     const dropCount = 15; // Number of ink drops
//     for (let i = 0; i < dropCount; i++) {
//         const x = Math.random() * window.innerWidth;
//         const y = Math.random() * window.innerHeight;
//         createInkDrop(x, y);
//     }
// });

// function createInkDrop(x, y) {
//     const drop = document.createElement("div");
//     drop.classList.add("ink-drop");

//     // Randomize size
//     const size = Math.random() * 80 + 20; // Size between 20px and 100px
//     drop.style.width = `${size}px`;
//     drop.style.height = `${size}px`;

//     // Positioning
//     drop.style.left = `${x - size / 2}px`;
//     drop.style.top = `${y - size / 2}px`;

//     document.body.appendChild(drop);

//     // Remove drop after animation
//     setTimeout(() => {
//         drop.remove();
//     }, 2500);
// }