// Get elements
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const yesSound = document.getElementById("yesSound");
const noSound = document.getElementById("noSound");
const customModal = document.getElementById("customModal");
const modalText = document.getElementById("modalText");

let noClicks = 0;

// Function to show custom modal
function showModal(message) {
  modalText.textContent = message;
  customModal.style.display = "flex";

  // Add close button
  const closeButton = document.createElement("span");
  closeButton.className = "close-modal";
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener("click", () => {
    customModal.style.display = "none";
  });
  modalText.parentNode.appendChild(closeButton);

  // Auto-close after 3 seconds
  setTimeout(() => {
    customModal.style.display = "none";
  }, 3000);
}

// Yes button click
yesButton.addEventListener("click", () => {
  yesSound.play();
  showModal("🤗 I know it and I love you too!");
});

// No button click
noButton.addEventListener("click", () => {
  noClicks++;
  noSound.play();

  if (noClicks < 10) {
    const messages = [
      "Wrong answer, try again!",
      "Are you sure? Think again!",
      "Nope, try clicking 'Yes'!",
      "You can't escape! Click 'Yes'!",
      "Still wrong! Keep trying!",
      "Hmm... not the right answer!",
      "You're stubborn, huh? Click 'Yes'!",
      "Wrong again! 😠",
      "Almost there... just click 'Yes'!",
      "Last chance! Click 'Yes'!"
    ];
    showModal(messages[noClicks - 1]);

    // Move the "No" button randomly
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
  } else {
    showModal("Be happy! 😊");
    setTimeout(() => {
      document.body.innerHTML = "<h1>Be happy! 😊</h1>";
    }, 3000); // Show final message for 3 seconds
  }
});