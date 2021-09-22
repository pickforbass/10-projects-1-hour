let hamburgerButton = document.getElementById('hamburger-button');
let hamburgerMenu = document.getElementById('hamburger-menu');

function openHideMenu(){
    hamburgerMenu.classList.toggle('hidden');
}

hamburgerButton.onclick = openHideMenu;