document.addEventListener('DOMContentLoaded', () => {
    const toggleCheckbox = document.getElementById('toggle_checkbox');

    // Initially set the theme to dark
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleCheckbox.checked = true;

    toggleCheckbox.addEventListener('change', () => {
        if (toggleCheckbox.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    });
});
