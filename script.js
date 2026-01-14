// Subtle bonfire interaction (no balloons, no stars)

const bonfire = document.querySelector(".bonfire");

// Flicker effect on mouse hover
bonfire.addEventListener("mouseenter", () => {
    bonfire.style.boxShadow = "0 0 100px orange";
    bonfire.style.transform = "scale(1.15)";
});

// Return to normal when mouse leaves
bonfire.addEventListener("mouseleave", () => {
    bonfire.style.boxShadow = "0 0 40px orange";
    bonfire.style.transform = "scale(1)";
});

// Gentle pulsing glow
setInterval(() => {
    bonfire.style.boxShadow = "0 0 60px red";
    setTimeout(() => {
        bonfire.style.boxShadow = "0 0 40px orange";
    }, 500);
}, 1000);
