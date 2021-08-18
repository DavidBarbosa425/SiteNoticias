let hourEl = document.querySelector('#hour');
let tituloEl = document.querySelector('.titulo');
let btnTituloEl = document.querySelector('.btnTitulo');
let conteudoEl = document.querySelector('.conteudo');
let btnConteudoEl = document.querySelector('.btnConteudo');
let insercaoTituloEl = document.querySelector('.insercaoTitulo');
let insercaoConteudoEl = document.querySelector('.insercaoConteudo')

function inicializaFuncoes() {
dateTime();
insereTituloConteudo();
};

function dateTime() {
    let date = new Date();
hourEl.innerHTML = date.toLocaleTimeString('pt-BR');
hourEl.innerHTML += ' - '
hourEl.innerHTML += date.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}


function insereTituloConteudo() {
    document.addEventListener('click', (e)=>{
        let el = e.target;
        if (el.classList.contains('btnTitulo'))
        insercaoTituloEl.innerHTML = tituloEl.value
        if (el.classList.contains('btnConteudo')) {
        insercaoConteudoEl.innerHTML = conteudoEl.value
        insercaoConteudoEl.innerHTML += ' '
        createButtonDelete();
        }
        if (el.classList.contains('btnApagar')) {
        insercaoTituloEl.innerHTML = ''
        insercaoConteudoEl.innerHTML = ''
        }
        
        
    });
}
function createButtonDelete(){
    let btnApagar = document.createElement('button')
    btnApagar.innerText = 'Apagar notícia';
    btnApagar.classList.add('btnApagar')
    insercaoConteudoEl.appendChild(btnApagar)
    
}


inicializaFuncoes();

