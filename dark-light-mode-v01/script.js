// Capturando os elementos
// Body -> Controla o tema;
const body = document.querySelector('.theme__content');
// button -> Ferramenta que solta a ação;
const button = document.querySelector('.button__alterar-tema')


button.addEventListener('click', ()=> {
    // Togle ajuda a alterar uma classe sem usar necessariamente um if
    body.classList.toggle('dark')
    
})