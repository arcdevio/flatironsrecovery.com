
(function(){'use strict';

    var font = document.createElement('link');
    font.async = true;
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css?family=Raleway:300,500,800';
    document.head.appendChild(font);

}());

(function(){'use strict';
    var banner = document.querySelector('.banner');

    if (window.localStorage.getItem('banner')) {
        banner.style.display = 'none';
        return;
    }

    var close = document.querySelector('.banner .close');
    banner.style.display = 'flex';
    close.addEventListener('click', function () {
        banner.style.display = 'none';
        window.localStorage.setItem('banner', 'true');
    });

}());
