document.addEventListener('DOMContentLoaded', () => {
  // Theme Switcher Logic without Emojis
  const themeToggle = document.getElementById('theme-toggle');
  const themeText = document.getElementById('theme-text');
  
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  if (themeText) {
    themeText.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      if (themeText) {
        themeText.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
      }
    });
  }

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Export Resume Action Trigger
  const exportBtn = document.getElementById('export-resume-btn');
  if (exportBtn && typeof exportProfileDataToExcel === 'function') {
    exportBtn.addEventListener('click', exportProfileDataToExcel);
  }
});
