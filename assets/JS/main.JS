    let hourEl = document.querySelector('#hour');
    let inputTituloEl = document.querySelector('.inputTitulo');
    let btnTituloEl = document.querySelector('.btnTitulo');
    let conteudoEl = document.querySelector('.conteudo');
    let btnConteudoEl = document.querySelector('.btnConteudo');
    let section1El = document.querySelector('.section1')
    let section2El = document.querySelector('.section2')
    let inputImgEl = document.querySelector('.inputImg')
    let btnImgEl = document.querySelector('.btnImg')
    let inputVideoEl = document.querySelector('.inputVideo')
    let btnVideoEl = document.querySelector('.btnVideo')
    
   
    function inicializaFuncoes() {
    dateTime();
    addSavedNews();
    horaTempoReal();
   
    };


    function dateTime() {
        let date = new Date();
    hourEl.innerHTML = date.toLocaleTimeString('pt-BR');
    hourEl.innerHTML += ' - '
    hourEl.innerHTML += date.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }


    function horaTempoReal() {
        setInterval(dateTime, 1000)
    }
    

        btnTituloEl.addEventListener('click', (e)=>{
            
            if (!inputTituloEl.value) return;
            tvalue = inputTituloEl.value
            conteudoEl.focus()
        })

        btnImgEl.addEventListener('click', (e) => {

            if (!inputImgEl.value) return;
            imgValue = inputImgEl.value;
        } )

        btnVideoEl.addEventListener('click', (e)=> {

            if (!inputVideoEl.value) return;
            videoValue = inputVideoEl.value;
        })

        btnConteudoEl.addEventListener('click', (e) =>{

            if(!conteudoEl.value) return;
            cvalue = conteudoEl.value;
            insereTituloConteudo(tvalue, cvalue, imgValue, videoValue);
            
        })


        // conteudoEl.addEventListener('keypress', (e) =>{
        //     if(e.keyCode === 13) 
        //     cvalue = conteudoEl.value;
        //     insereTituloConteudo(tvalue, cvalue);
        //     cleanEntries()
        // })


        function cleanEntries(){
            inputTituloEl.value = '';
            conteudoEl.value = '';
            inputImgEl.value = '';
            inputVideoEl.value = '';
            
            inputTituloEl.focus()
            
        }


        function insereTituloConteudo(tvalue, cvalue, imgValue, videoValue) {
            article = createArticle();
            section2El.appendChild(article);
            h1 = createH1();
            article.appendChild(h1);
            div = createDiv();
            article.appendChild(div);
            img = createImg();
            div.appendChild(img)
            p = createP();
            article.appendChild(p)
            divVideo = createDivVideo();
            article.appendChild(divVideo)
            btnApagar = createButtonDelete()
            article.appendChild(btnApagar)

            h1.innerText = tvalue;
            img.src = imgValue;
            p.innerText = cvalue;
            divVideo.innerHTML = videoValue
            cleanEntries()
            saveNews();
        
        }


    document.addEventListener('click', (e) =>{
        let el = e.target;
        if (el.classList.contains('btnApagar')){
            el.parentElement.remove();
            saveNews();
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
        btnApagar.setAttribute('title','Apagar conteúdo da matéria e título')
        return btnApagar;
       
    }

    function createDiv() {
        let div = document.createElement('div')
        div.classList.add('insercaoDivImg')
        return div;
    }

    
    function createDivVideo() {
        let div = document.createElement('div')
        div.classList.add('insercaoDivVideo')
        return div;
    }

    function createImg() {
        let img = document.createElement('img')
        img.classList.add('insercaoImg')
        return img;
    }


    function createP() {

        let p = document.createElement('p')
        p.classList.add('insercaoConteudo')
        return p;
               
    }


    function saveNews(){
        const h1sTitles = section2El.querySelectorAll('.insercaoTitulo')

           const arrayAllTitles = [];
           for (let h1Title of h1sTitles)
                {
                let h1TitleText = h1Title.innerText.trim();
                    arrayAllTitles.push(h1TitleText)
                } 
            
         
                const h1sTitlesJSON = JSON.stringify(arrayAllTitles)
                localStorage.setItem('h1sTitles', h1sTitlesJSON)

        const psMatters = section2El.querySelectorAll('.insercaoConteudo')

            const arrayAllMatters = [];
            for (let pMatter of psMatters){
                 let pMatterText = pMatter.innerText.trim();
                 arrayAllMatters.push(pMatterText)
                
               }
                const psMattersJSON = JSON.stringify(arrayAllMatters)
                localStorage.setItem('psMatters', psMattersJSON)

         const imgs = section2El.querySelectorAll('.insercaoImg')

             const arrayAllImgs = [];
             for (let img of imgs) {
                 let imgLink = img.src
                 arrayAllImgs.push(imgLink)
             }
                const imgsJSON = JSON.stringify(arrayAllImgs)
                localStorage.setItem('imgs', imgsJSON )


        const videos = section2El.querySelectorAll('.insercaoDivVideo');
            
            const arrayAllVideos = [];
            for(let video of videos) {
                let videoLink = video.innerHTML
                arrayAllVideos.push(videoLink)
            }
                const videosJSON = JSON.stringify(arrayAllVideos)
                localStorage.setItem('videos', videosJSON )

     }
     
     
    function addSavedNews(){
             const h1sTitles = localStorage.getItem('h1sTitles');
             const arrayAllTitles = JSON.parse(h1sTitles);

             const psMatters = localStorage.getItem('psMatters');
             const arrayAllMatters = JSON.parse(psMatters);

             const imgs = localStorage.getItem('imgs');
             const arrayAllImgs = JSON.parse(imgs)

             const videos = localStorage.getItem('videos');
             const arrayAllVideos = JSON.parse(videos)

                 for (let i= 0;i < arrayAllTitles.length; i++)
                 {
                     insereTituloConteudo(arrayAllTitles[i],arrayAllMatters[i],arrayAllImgs[i],arrayAllVideos[i]);
                 }

    }
        
    
    inicializaFuncoes();

