let hourEl = document.querySelector('#hour');
let inputTextEl = document.querySelector('.inputText');
let btnTituloEl = document.querySelector('.btnTitulo');
let conteudoEl = document.querySelector('.conteudo');
let btnConteudoEl = document.querySelector('.btnConteudo');
let section1El = document.querySelector('.section1')
let news = document.querySelector('.news')

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

    let tvalue;
    let cvalue;

function insereTituloConteudo() {

    document.addEventListener('click', (e)=>{
        let el = e.target;
        
        if (el.classList.contains('btnTitulo')){
        tvalue = inputTextEl.value}
        

        if (el.classList.contains('btnConteudo')) {
        cvalue = conteudoEl.value
        createArticle();
            
            
        }
        if (el.classList.contains('btnApagar')) {
            tvalue.innerHTML = ''
            cvalue.innerHTML = ''
        }
        
    })
};

function createButtonDelete(article){
    let btnApagar = document.createElement('button')
    btnApagar.innerText = 'Apagar notícia';
    btnApagar.classList.add('btnApagar')
    article.appendChild(btnApagar)
    
    
}

function createArticle() {
    let article = document.createElement('article')
    article.classList.add('news')
    section1El.appendChild(article)
    
    createH1(article);
    
}

function createH1(article) {

    let h1 = document.createElement('h1')
    h1.classList.add('insercaoTitulo')
    article.appendChild(h1)
    h1.innerText = tvalue
    

    createP(article)
    
}


function createP(article) {

    let p = document.createElement('p')
    p.classList.add('insercaoConteudo')
    article.appendChild(p)
    p.innerText = cvalue
    createButtonDelete(article)

}

function eraseMatter() {
    
    
}


inicializaFuncoes();

