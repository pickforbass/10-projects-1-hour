let hamburgerButton = document.getElementById('hamburger-button');
let hamburgerMenu = document.getElementById('hamburger-menu');

function openHideMenu(){
    hamburgerMenu.classList.toggle('slide-right');
}

hamburgerButton.onclick = openHideMenu;