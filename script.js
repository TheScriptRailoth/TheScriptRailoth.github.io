document.addEventListener('DOMContentLoaded', () => {
    const toggleCheckbox = document.getElementById('toggle_checkbox');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleCheckbox.checked = true;
    }

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
