// Toggle the navigation menu display
function toggleMenu() {
  const navbar = document.getElementById('navbar');
  navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
}

// Load a section dynamically
function loadSection(section) {
  const container = document.getElementById('section-container');
  
  // Clear the container
  container.innerHTML = '';

  // Fetch the HTML file for the section
  fetch(`sections/${section}.html`)
    .then(response => response.text())
    .then(data => {
      container.innerHTML = data;
      toggleMenu();  // Hide the menu after selecting an option
    });
}

// Download sample code function
function downloadCode() {
  const link = document.createElement('a');
  link.href = '/storage/emulated/Download/SpicydevSite.zip';
  link.download = 'SpicydevSite.zip';
  link.click(); 
}

// Load the default section on page load
document.addEventListener('DOMContentLoaded', () => loadSection('home'));
