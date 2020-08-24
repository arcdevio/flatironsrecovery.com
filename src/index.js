
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
        header.style.top = '60px';
        close.parentNode.style.display = 'flex';
    };

    close.addEventListener('click', function (e) {
        window.sessionStorage.setItem('hideBanner', 'hide');

        header.style.top = '0';
        e.target.parentNode.style.display = 'none';
    });
}());
