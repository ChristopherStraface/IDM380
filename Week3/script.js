function toggleDarkMode(isEnabled) {
    document.body.classList.toggle('dark-mode', isEnabled);
    localStorage.setItem('darkMode', isEnabled ? 'on' : 'off');
}

function applyDarkModePreference() {
    const darkMode = localStorage.getItem('darkMode') === 'on';
    document.body.classList.toggle('dark-mode', darkMode);
    document.getElementById('darkModeToggle').checked = darkMode;
}

document.addEventListener('DOMContentLoaded', function () {
    applyDarkModePreference();
    const toggle = document.getElementById('darkModeToggle');
    if (toggle) {
        toggle.addEventListener('change', function (e) {
            toggleDarkMode(e.target.checked);
        });
    }
});