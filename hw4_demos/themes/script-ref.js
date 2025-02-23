GOOD_TEXT = "I am a Honda Civic. I will take you from work and back, I get 30 mpg to help save you fuel, and I have CarPlay so you can easily listen to your favorite jams!";
EVIL_TEXT = "I am a Honda Civic. I can take you on track days, scare your friends, and I carry a racing wing in the back so I look good while doing it."
GOOD_H1 = "The Good Car";
EVIL_H1 = "The Evil Car";
GOOD_SRC = "assets/civic.png";
GOOD_ALT = "2016 Honda Civic LX";
EVIL_SRC = "assets/ctr.jpg";
EVIL_ALT = "2017 Honda Civic TypeR FK8";
function setTheme(theme) {
    const root = document.documentElement;
    const my_text = document.getElementById('my-text');
    const my_h1 = document.getElementById('my-header');
    const my_img = document.getElementById('my-image');
    if (theme === 'evil'){
        root.style.setProperty('background', 'var(--bg-color-evil)');
        root.style.setProperty('color', 'var(--text-color-evil)');
        root.style.setProperty('font-family', 'var(--text-font-evil)');
        my_text.innerText = EVIL_TEXT;
        my_h1.innerText = EVIL_H1;
        my_img['src'] = EVIL_SRC;
        my_img['alt'] = EVIL_ALT;
    }
    else{
        root.style.setProperty('background', 'var(--bg-color-good)');
        root.style.setProperty('color', 'var(--text-color-good)');
        root.style.setProperty('font-family', 'var(--text-font-good)');
        my_text.innerText = GOOD_TEXT;
        my_h1.innerText = GOOD_H1;
        my_img['src'] = GOOD_SRC;
        my_img['alt'] = GOOD_ALT;
    }
}
function toggleTheme()
{
    const currTheme = localStorage.getItem('theme') || 'good';
    const newTheme = currTheme === 'good'? 'evil': 'good';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
}

function setSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme) {
        setTheme(savedTheme);
        document.getElementById('themeToggle').checked = (savedTheme === 'evil');
    }
}

document.addEventListener('DOMContentLoaded', setSavedTheme);