const btnToggle = document.querySelector('.toggle-btn');
const sidebar = document.getElementById('sidebar');
const body = document.querySelector('body');

btnToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    sidebar.classList.toggle('active');
});

body.addEventListener('click', function () {
    if(sidebar.classList.contains('active')) {
        sidebar.classList.toggle('active');
    }
});

/*ScrollReveal().reveal('.element1');
ScrollReveal().reveal('.element2', {delay: 200});
ScrollReveal().reveal('.element3', {delay: 600});
ScrollReveal().reveal('.element4', {delay: 800});*/