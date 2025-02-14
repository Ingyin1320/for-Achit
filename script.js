// Function to redirect to yes.html when the "Yes" button is clicked
function nextPage() {
    window.location.href = "yes.html";
}

// Function to move the "No" button randomly when hovered over
function moveButton() {
    const noButton = document.getElementById("noButton");
    
    // Generate random positions within the viewport
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

    // Apply new position
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}
