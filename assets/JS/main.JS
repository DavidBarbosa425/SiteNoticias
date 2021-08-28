    let hourEl = document.querySelector('#hour');
    let inputTextEl = document.querySelector('.inputText');
    let btnTituloEl = document.querySelector('.btnTitulo');
    let conteudoEl = document.querySelector('.conteudo');
    let btnConteudoEl = document.querySelector('.btnConteudo');
    let section1El = document.querySelector('.section1')
    let section2El = document.querySelector('.section2')
    let news = document.querySelector('.news')
    let insertNewsEl = document.querySelector('.insertNews')
    let insercaoConteudoEl = document.querySelector('.insercaoConteudo')
    let btnApagarNoticiasEl = document.querySelector('.btnApagarNoticias')


    inputTextEl.focus()
    conteudoEl.focus()
        
    function inicializaFuncoes() {
    dateTime();
    insereTituloConteudo();
    addNewsSaves();


    };

    function dateTime() {
        let date = new Date();
    hourEl.innerHTML = date.toLocaleTimeString('pt-BR');
    hourEl.innerHTML += ' - '
    hourEl.innerHTML += date.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }





        document.addEventListener('click', (e)=>{
            let el = e.target;
            
            if (el.classList.contains('btnTitulo')){
            tvalue = inputTextEl.value}
            

            if (el.classList.contains('btnConteudo')) {
            cvalue = conteudoEl.value
            insereTituloConteudo(tvalue, cvalue);
            } 
        
        })

        function insereTituloConteudo(tvalue, cvalue) {
            article = createArticle();
            section2El.appendChild(article);
            h1 = createH1();
            article.appendChild(h1);
            p = createP();
            article.appendChild(p)
            btnApagar = createButtonDelete()
            article.appendChild(btnApagar)

            h1.innerHTML = tvalue;
            p.innerHTML = cvalue;
            saveNews();
        
        }

    document.addEventListener('click', (e) =>{
        let el = e.target;
        if (el.classList.contains('btnApagar')){
            el.parentElement.remove();
            //saveNews();
        }
    })

    

    function createArticle() {
        article = document.createElement('article')
        article.classList.add('insertNews')
        return article;
        
    }


    function createH1() {

        let h1 = document.createElement('h1')
        h1.classList.add('insercaoTitulo')
        return h1;
         
    }

    function createButtonDelete(){
        let btnApagar = document.createElement('button')
        btnApagar.innerText = 'Apagar notícia';
        btnApagar.classList.add('btnApagar')
        return btnApagar;
       
    }


    function createP() {

        let p = document.createElement('p')
        p.classList.add('insercaoConteudo')
        return p;
        
        
    }


    function saveNews(){
        let titles = section2El.querySelectorAll('.insercaoTitulo')
        let texts = section2El.querySelectorAll('.insercaoConteudo')
        console.log()
        console.log(texts)
        let listTitles = [];
        for (let title of titles){
            
            let newTitle = title.innerText;
            newTitle = newTitle.trim();
            
            listTitles.push(newTitle)
            
            
        }
            const titlesJSON = JSON.stringify(listTitles)
            console.log(titlesJSON)
            localStorage.setItem('titles', titlesJSON)

             let listTexts = [];
             for (let text of texts){
                
                 let newText = text.innerText;
                 newText = newText.trim();
                
                 listTexts.push(newText)
                
                
             }
                 const textsJSON = JSON.stringify(listTexts)
                 console.log(textsJSON)
                 localStorage.setItem('texts', textsJSON)
        
    }

        function addNewsSaves(){
            let titles = localStorage.getItem('titles');
            let listTitles = JSON.parse(titles);

            let texts = localStorage.getItem('texts');
            let listTexts = JSON.parse(texts);

            for (title of listTitles){
                insereTituloConteudo(title)
            };
            for (text of listTexts){};
 
           
        }
    

    inicializaFuncoes();

