let mode = document.getElementById('mode');
let currentMode = 'Light Mode';
let body = document.querySelector('body');

let switchTheme = () => {
    if (currentMode === 'Light Mode') {
        currentMode = 'Dark Mode';
        body.classList.add('dark');
        body.classList.remove('light');
    }
    else {
        currentMode = 'Light Mode';
        body.classList.add('light');
        body.classList.remove('dark');
    }
    console.log(currentMode);
}
mode.addEventListener('click', switchTheme);