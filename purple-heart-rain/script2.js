const main = document.getElementById('main');
const launcher = document.getElementById('launcher');

function makeAHeartFall() {
    let heart = document.createElement('div');
    heart.classList.add('rain');
    heart.innerHTML="<p>🔥</p>";

    heart.style.left = Math.random()*98+"%";
    
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 11000);
}

setInterval(makeAHeartFall, 235);


