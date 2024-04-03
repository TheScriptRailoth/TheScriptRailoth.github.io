// document.addEventListener('DOMContentLoaded', () => {
//     const themeToggleButton = document.getElementById('theme-toggle');
//     const currentTheme = localStorage.getItem('theme') || 'light';

//     if (currentTheme === 'dark') {
//         document.documentElement.setAttribute('data-theme', 'dark');
//     }

//     themeToggleButton.addEventListener('click', () => {
//         const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
//         document.documentElement.setAttribute('data-theme', theme);
//         localStorage.setItem('theme', theme);
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    const toggleCheckbox = document.getElementById('toggle_checkbox');
    const currentTheme = localStorage.getItem('theme');

    // Set the initial theme and checkbox state
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleCheckbox.checked = true;
    } else {
        // Ensure light theme is set by default or when explicitly chosen
        document.documentElement.setAttribute('data-theme', 'light');
        toggleCheckbox.checked = false;
    }

    // Listen for changes on the checkbox to switch themes
    toggleCheckbox.addEventListener('change', () => {
        if (toggleCheckbox.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
});
