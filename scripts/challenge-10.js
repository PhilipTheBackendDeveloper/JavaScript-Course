function setupExclusiveToggle(buttons) {
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Turn OFF all buttons first
      buttons.forEach(btn => btn.classList.remove('active'));

      // Turn ON the one that was clicked
      button.classList.add('active');
    });
  });
}

// Get all buttons
const buttons = document.querySelectorAll('.toggle-button');

// Apply the exclusive toggle function
setupExclusiveToggle(buttons);
