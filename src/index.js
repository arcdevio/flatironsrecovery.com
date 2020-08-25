
(function(){'use strict';

    var font = document.createElement('link');
    font.async = true;
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css?family=Raleway:300,500,800';
    document.head.appendChild(font);

}());

(function(){'use strict';
    var hideBanner = window.sessionStorage.getItem('hideBanner');

    var header = document.querySelector('header');
    var close = document.querySelector('.close');

    if (!hideBanner) {
        close.parentNode.style.display = 'flex';
    };

    close.addEventListener('click', function (e) {
        window.sessionStorage.setItem('hideBanner', 'hide');

        e.target.parentNode.style.display = 'none';
    });
}());
