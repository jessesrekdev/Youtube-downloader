// Add click event listener to the button
    document.getElementById('telegramButton').addEventListener('click', function() {
      // Add clicked class for animation
      this.classList.add('clicked');

      // Open Telegram link
      window.location.href = 'https://t.me/web_jesse_network';
    });
