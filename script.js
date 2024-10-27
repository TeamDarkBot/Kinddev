function downloadCode() {
  const link = document.createElement('a');
  link.href = '/storage/emulated/Download/SpicydevSite.zip';  // Path to your file
  link.download = 'SpicydevSite.zip';
  link.click();
}
