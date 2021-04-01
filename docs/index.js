
(function () {
    'use strict';
    var font = document.createElement('link');
    font.async = true;
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css?family=Raleway:300,500,800&display=swap';
    document.head.appendChild(font);
}());

// share
(function () {
    'use strict';
    if (!window.navigator.share) return;

    var share = document.querySelector('.share');
    if (!share) return;

    var icon = document.createElement('i');

    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18 16.1c-.8 0-1.4.3-2 .8l-7.1-4.2c.1-.2.1-.5.1-.7s0-.5-.1-.7L16 7.2c.5.5 1.2.8 2 .8 1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3c0 .2 0 .5.1.7L8 9.8C7.5 9.3 6.8 9 6 9c-1.7 0-3 1.3-3 3s1.3 3 3 3c.8 0 1.5-.3 2-.8l7.1 4.2c-.1.2-.1.4-.1.6 0 1.6 1.3 2.9 2.9 2.9s2.9-1.3 2.9-2.9-1.2-2.9-2.8-2.9z"/></svg>';

    icon.style = '\
        width: 1rem;\
        height: 1rem;\
        margin: 0.25rem;\
        display: inline-block;\
    ';

    share.style = '\
        right: 1vw;\
        bottom: 5rem;\
        border: none;\
        cursor: pointer;\
        position: fixed;\
        box-shadow: none;\
        text-align: center;\
        border-radius: 1rem;\
        text-decoration: none;\
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

// call
(function () {
    'use strict';
    var call = document.querySelector('.call');
    if (!call) return;

    var icon = document.createElement('i');

    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79a15.161 15.161 0 006.59 6.59c.771-.762 1.524-1.543 2.307-2.293.696-.49 1.472.145 2.208.196.873.221 1.789.155 2.663.306.798.333.582 1.256.612 1.94-.012.89.025 1.783-.02 2.672-.25 1.062-1.485.778-2.288.75-5.314-.365-10.334-3.43-13.124-7.96C3.866 10.256 2.93 7.022 3.02 3.798c.134-.77.961-.846 1.59-.799 1.03.012 2.063-.026 3.09.02 1.103.265.708 1.544.883 2.364.075.838.345 1.641.534 2.454-.007.735-.74 1.107-1.161 1.616L6.62 10.79z"/></svg>';

    icon.style = '\
        width: 1rem;\
        height: 1rem;\
        margin: 0.25rem;\
        display: inline-block;\
    ';

    call.style = '\
        right: 1vw;\
        bottom: 1rem;\
        border: none;\
        cursor: pointer;\
        position: fixed;\
        box-shadow: none;\
        text-align: center;\
        border-radius: 1rem;\
        padding: 0.75rem 1rem;\
        text-decoration: none;\
        vertical-align: middle;\
        color: rgba(var(--call-color));\
        box-shadow: 0 0 6px 3px rgba(0,0,0,0.1);\
        background: rgba(var(--call-background));\
    ';

    call.hidden = false;
    call.insertAdjacentElement('afterbegin', icon);
}());

(function () {
    'use strict';
    var banner = document.querySelector('.banner');

    if (window.localStorage.getItem('banner')) {
        banner.hidden = true;
        return;
    }

    var close = document.querySelector('.banner .close');
    banner.hidden = false;
    close.addEventListener('click', function () {
        banner.hidden = true;
        window.localStorage.setItem('banner', 'true');
    });

}());

(function () {
    'use strict';
    var form = document.querySelector('form');

    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var body = Object.fromEntries(new FormData(form));

        body.$name = body.$name || 'Contact';
        body.$domain = 'flatironsrecovery.com';
        body.$to = 'moberg@flatironsrecovery.com';

        var url = '/email';
        var options = {
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify(body)
        };

        var button = form.querySelector('[type="submit"]');
        button.disabled = true;
        button.style.cursor = 'wait';
        button.style.backgroundColor = 'grey';

        window.fetch(url, options)
            // .then(function (response) { return response.json(); })
            .then(function (response) {
                if (response.status !== 200) throw new Error(response.statusText);
                form.reset();
                button.disabled = false;
                button.style.cursor = 'not-allowed';
                button.style.backgroundColor = 'green';
                button.value = 'Success: Form Sent';
            }).catch(function (error) {
                button.style.cursor = 'not-allowed';
                button.style.backgroundColor = 'red';
                button.value = 'Error' + (error.message ? ': ' + error.message : '');
            });

        return false;
    });

}());

(function () {
    'use strict';
    document.addEventListener('DOMContentLoaded', function () {
        var hash = window.location.hash;
        if (hash) {
            window.location.hash = '';
            window.location.hash = hash;
        }
    });
}());