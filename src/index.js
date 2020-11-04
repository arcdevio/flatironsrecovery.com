
(function(){'use strict';
    var font = document.createElement('link');
    font.async = true;
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css?family=Raleway:300,500,800';
    document.head.appendChild(font);
}());

(function(){'use strict';
    var share = document.querySelector('.share');

    if (!share) return;
    if (!window.navigator.share) return;

    var icon = document.createElement('i');

    icon.innerHTML = '\
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\
            <path fill="currentColor" d="M18 16.1c-.8 0-1.4.3-2 .8l-7.1-4.2c.1-.2.1-.5.1-.7s0-.5-.1-.7L16 7.2c.5.5 1.2.8 2 .8 1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3c0 .2 0 .5.1.7L8 9.8C7.5 9.3 6.8 9 6 9c-1.7 0-3 1.3-3 3s1.3 3 3 3c.8 0 1.5-.3 2-.8l7.1 4.2c-.1.2-.1.4-.1.6 0 1.6 1.3 2.9 2.9 2.9s2.9-1.3 2.9-2.9-1.2-2.9-2.8-2.9z"/>\
        </svg>\
    ';

    icon.style = '\
        width: 1rem;\
        height: 1rem;\
        margin: 0.25rem;\
        display: inline-block;\
    ';

    share.style = '\
        right: 1vw;\
        bottom: 1vh;\
        border: none;\
        cursor: pointer;\
        position: fixed;\
        box-shadow: none;\
        text-align: center;\
        border-radius: 1rem;\
        padding: 0.75rem 1rem;\
        vertical-align: middle;\
        color: rgba(var(--share-color));\
        box-shadow: 0 0 6px 3px rgba(0,0,0,0.1);\
        background: rgba(var(--share-background));\
    ';

    share.hidden = false;
    share.insertAdjacentElement('afterbegin', icon);

    share.addEventListener('click', function () {
        window.navigator.share({
            title: document.title,
            url: window.location.href
        }).catch(console.error);
    });

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

(function(){'use strict';
    const form = document.querySelector('form');

    if (!form) return;

    const url = 'https://2vaid6dwk1.execute-api.us-west-2.amazonaws.com/submit';

    form.addEventListener('submit', e => {
        e.preventDefault();

        const body = Object.fromEntries(new FormData(form));

        body.$name = body.$name || 'Contact';
        body.$domain = 'flatironsrecovery.com';
        // body.$to = 'flatironsrecoverycenter@gmail.com';
        body.$to = 'alex@arcdev.io';

        window.fetch(url, {
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(data => {
            form.reset();
            console.log(data);
        })
        .catch(error => {
            console.log(error);    
        });

    });

}());