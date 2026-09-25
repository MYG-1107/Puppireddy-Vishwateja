document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Functionality
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeText = document.getElementById('theme-text');
  const htmlElement = document.documentElement;

  // Load saved preference or system default
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    updateToggleText(savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    htmlElement.setAttribute('data-theme', dark);
    updateToggleText('dark');
  }

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleText(newTheme);
  });

  function updateToggleText(theme) {
    themeText.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
  }

  // Mobile Navigation Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navWrapper = document.getElementById('nav-wrapper');

  menuToggle.addEventListener('click', () => {
    navWrapper.classList.toggle('active');
  });

  // Close Mobile Menu on Link Click
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navWrapper.classList.contains('active')) {
        navWrapper.classList.remove('active');
      }
    });
  });
});
