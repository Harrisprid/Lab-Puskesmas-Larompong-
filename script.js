// Toggle class Active

const navbarNav = document.querySelector ('.navbar-nav');

// Ketika menu hamburger di klik

document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Keluar dari Hamburger menu ketika klik area selain hamburger dan nav 

const hamburger = document.querySelector('#menu');

document.addEventListener('click',function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});