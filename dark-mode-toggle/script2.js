let toggle = document.getElementById('toggle-button');
let h1 = document.getElementsByTagName('h1');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    h1[0].classList.toggle('dark');
    
})