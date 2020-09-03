
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

(function(){'use strict';
    const form = document.querySelector('form');

    if (!form) return;

    const url = 'https://eboi4z4mni.execute-api.us-west-2.amazonaws.com/default/submit';

    form.addEventListener('submit', e => {
        e.preventDefault();

        const body = Object.fromEntries(new FormData(form));

        body.$name = body.$name || 'Contact';
        body.$domain = 'flatironsrecovery.com';
        body.$to = 'alex.steven.elias@gmail.com';

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