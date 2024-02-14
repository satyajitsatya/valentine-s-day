// JavaScript code for adding interactivity

window.addEventListener('DOMContentLoaded', function () {
    const loveText = document.getElementById('love-text');
    const fallingHeartsContainer = document.getElementById('falling-hearts-container');

    // Array of love messages
    const loveMessages = [
        "best thing",
        "most wonderful person",
        "light of my life",
        "reason for my smile",
        "heartbeat of my soul"
    ];

    // Function to select a random love message
    function getRandomMessage() {
        return loveMessages[Math.floor(Math.random() * loveMessages.length)];
    }

    // Update love message periodically
    setInterval(function () {
        loveText.textContent = getRandomMessage();
    }, 3000); // Change message every 3 seconds

    // Function to create a falling heart
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * window.innerWidth + 'px';
        fallingHeartsContainer.appendChild(heart);

        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Create falling hearts periodically
    setInterval(createHeart, 300); // Create a heart every 0.5 seconds
});
