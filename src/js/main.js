// dom content loaded
window.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const closeMenu = document.getElementById('closeMenu');
  const navbar = document.getElementById('navbar');
  const overlay = document.getElementById('overlay');

  // toggle menu
  mobileMenuButton.onclick = () => {
    navbar.classList.add('showSidebar');
    overlay.classList.add('showOverlay');
  };

  closeMenu.onclick = () => {
    navbar.classList.remove('showSidebar');
    overlay.classList.remove('showOverlay');
  };

  // cancel menu click on outside
  document.onclick = (e) => {
    console.log(e);
    if (!mobileMenuButton.contains(e.target) && !closeMenu.contains(e.target)) {
      navbar.classList.remove('showSidebar');
      overlay.classList.remove('showOverlay');
    }
  };
});

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light';

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark';

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme');
