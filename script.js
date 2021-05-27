const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const navs = document.querySelectorAll('.nav');


openBtn.addEventListener('click', () => {
    openBtn.classList.add('hide');
    navs.forEach((nav) => nav.classList.add('visible'));
})

closeBtn.addEventListener('click', () => {
    openBtn.classList.remove('hide');
    navs.forEach((nav) => nav.classList.remove('visible'));
})