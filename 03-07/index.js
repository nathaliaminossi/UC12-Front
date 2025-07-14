// Entre documento HTML e pegue o elemento de id btn-click
const btnClick = document.getElementById('btn-lick');
const btnHover = document.getElementById('btn-Hover');
const title = document.getElementById('title');


// adiciona um evento de click no botão
btnClick.addEventListener('click',() => {
    
});


btnHover.addEventListener('mouseover',() => {
    title.textContent = 'Título mudou';
});

btnHover.addEventListener('mouseover', () => {
    title.textContent = 'Este titulo vai mudar';
    title.style.color = 'red';
    title.style.fontSize = '80px';
})

const btn = document.getElementsByClassName('btn');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        alert('botão ' + i + ' da classe clicado');
    }) 
}

// querySelector retorna o PRIMEIRO elemnto que ele achar
// pode ser tag, classe e id
const btn2 = document.querySelector('.btn');
btn2.addEventListener('click',() => {
    alert("Botão clicado")
});

const btns = document.querySelectorAll('button');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        title.style.color = 'blue';
    }) 
}




const btnClick = document.getElementById('btn-Click');
const btndbClick = document.getElementById('btndb-Click');
const btnmousedown = document.getElementById('btn-mousedown');
const btnmouseup = document.getElementById('btn-mouseup');

function mensagem () {
    alert("Evento disparado ");
}

btnClick.addEventListener('click', mensagem)
btndbClick.addEventListener('dblclick', mensagem)
btnmousedown.addEventListener('mousedown', mensagem)
btnmouseup.addEventListener('mouseup', mensagem)


document.addEventListener('keyup',function(event){
    alert("Tecla pressionada:" + event.key)
} )







