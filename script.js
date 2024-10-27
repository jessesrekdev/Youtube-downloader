import('./dw.js');

r.style.display = 'none';
cardbody.style.display = 'none';

start.addEventListener('click', function () {
    cardbody.style.display = 'block';
    start.style.display = 'none';
});

r.addEventListener('click', function () {
    location.reload();
});

faq.addEventListener('click', function () {
    window.open("http://127.0.0.1:5500/faq");
});
