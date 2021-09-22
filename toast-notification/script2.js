let button = document.getElementById('launch-notif');
let container = document.getElementById('container');


function createToast () {
    let toast = document.createElement('div');
    toast.innerHTML='<span>This is my super toast</span>';
    toast.classList.add('toast-container')
    container.appendChild(toast);

    setTimeout(()=>
    container.remove(toast), 2500);
}

button.addEventListener('click', createToast);