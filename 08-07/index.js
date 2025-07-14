const nav = document.querySelector('nav');
const menu = document.querySelector('span');
const header = document.querySelector('header');




menu.addEventListener('click', () => {
    nav.classList.toggle('showNav');  // adiciona estilo
    nav.classList.toggle('ativo');    // ativa animação

});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('change');
    } else {
        header.classList.remove('change');
    }
})

const box = document.querySelector('.box');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobersever(entry,target);
            }
    });
});

observer.observe(box);