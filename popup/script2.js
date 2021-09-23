window.addEventListener("load", function(event) {

    const newsletterBtn = document.getElementById('newsletter-btn');
    const popUpContainer = document.getElementById('pop-up-container');
    const newsletterSub = document.getElementById('newsletter-sub');

    function popUp() {
        popUpContainer.classList.add('pop');
    }

    function close() {
        popUpContainer.classList.remove('pop');
    }

    newsletterBtn.addEventListener('click',popUp);
    newsletterSub.addEventListener('click', close);

    
  });



