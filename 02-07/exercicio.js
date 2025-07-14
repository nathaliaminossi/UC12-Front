const nav = document.querySelector('nav');
const menu = document.querySelector('span');
const header = document.querySelector('header');




menu.addEventListener('click', () => {
    nav.classList.toggle('showNav');  // adiciona estilo
    nav.classList.toggle('ativo');    // ativa animação

});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('changes');
    } else {
        header.classList.remove('changes');
    }
})