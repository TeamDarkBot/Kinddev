function toggleMenu() {
  const navbar = document.getElementById('navbar');
  if (navbar.style.display === 'flex') {
    navbar.style.display = 'none';
  } else {
    navbar.style.display = 'flex';
  }
}

function downloadCode() {
  const link = document.createElement('a');
  link.href = '/storage/emulated/Download/SpicydevSite.zip';  // Path to your file
  link.download = 'SpicydevSite.zip';
  link.click();
}
