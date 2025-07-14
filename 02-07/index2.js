const nav = document.querySelector('nav');
const menu = document.querySelector('span');

menu.addEventListener('click', () => {
  // Alterna a classe que mostra ou esconde o menu
  nav.classList.toggle('showNav');
  nav.classList.toggle('navAtivo');
});

