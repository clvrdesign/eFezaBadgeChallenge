// Theme switcher
document.addEventListener('DOMContentLoaded', ()=> {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.querySelector('body');

    // Function to set the theme based on local storage
    const setTheme = () => {
        const isDark = localStorage.getItem('isDark');
        if (isDark === 'true') {
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
        }
    };

    // Call setTheme function when DOM content is loaded
    setTheme();

    themeToggle.addEventListener('click', ()=> {
        body.classList.toggle('dark-theme');
        // Update local storage with the current theme preference
        localStorage.setItem('isDark', body.classList.contains('dark-theme'));
    });
});
