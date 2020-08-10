
(function(){'use strict';

    var font = document.createElement('link');
    font.async = true;
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css?family=Raleway:300,500,800';
    document.head.appendChild(font);

}());

(function(){'use strict';

    var triggers = document.querySelectorAll('.icon');
    var faqs = Array.prototype.slice.call(triggers);

    faqs.forEach(function (faq) {
        faq.addEventListener('click', function (e) {
            faq.parentNode.parentNode.nextElementSibling.classList.toggle('active');
        });
    });

}());
