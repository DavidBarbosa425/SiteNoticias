let hourEl = document.querySelector('#hour');
let inputTitleEl = document.querySelector('.inputTitle');
let btnTitleEl = document.querySelector('.btnTitle');
let newsEl = document.querySelector('.news');
let btnNewsEl = document.querySelector('.btnNews');
let containerInsertedNewsEl = document.querySelector('.containerInsertedNews')
let inputImgEl = document.querySelector('.inputImg')
let btnImgEl = document.querySelector('.btnImg')
let inputVideoEl = document.querySelector('.inputVideo')
let btnVideoEl = document.querySelector('.btnVideo')

let tValue;
let nValue;
let imgValue;
let videoValue;

function initializeFunctions() {

    formattedTimeDate();
    addSavedNews();
    startTimeDate();
};

function formattedTimeDate() {

    let date = new Date();
    hourEl.innerHTML = date.toLocaleTimeString('pt-BR');
    hourEl.innerHTML += ' - '
    hourEl.innerHTML += date.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
};

function startTimeDate() {
    setInterval(() => {
        formattedTimeDate();
    }, 1000)
};

btnTitleEl.addEventListener('click', (e)=> {
        
    if (!inputTitleEl.value) return;
        tValue = inputTitleEl.value
        newsEl.focus()
});

btnImgEl.addEventListener('click', (e) => {

    if (!inputImgEl.value) return;
        imgValue = inputImgEl.value;
});

btnVideoEl.addEventListener('click', (e)=> {

    if (!inputVideoEl.value) return;
        videoValue = inputVideoEl.value;
});

btnNewsEl.addEventListener('click', (e) =>{

    if(!newsEl.value) return;
        nValue = newsEl.value;
        insertCompleteNews(tValue, nValue, imgValue, videoValue);
});

function cleanInputs(){

    inputTitleEl.value = '';
    newsEl.value = '';
    inputImgEl.value = '';
    inputVideoEl.value = '';
        
    inputTitleEl.focus()
};

function insertCompleteNews(tValue, nValue, imgValue, videoValue) {

    let article = createArticle();
    containerInsertedNewsEl.appendChild(article);
    let h1 = createH1();
    article.appendChild(h1);
    let div = createDiv();
    article.appendChild(div);
    let img = createImg();
    div.appendChild(img)
    let p = createP();
    article.appendChild(p)
    let divVideo = createDivVideo();
    article.appendChild(divVideo)
    let buttonDelete = createButtonDelete()
    article.appendChild(buttonDelete)

    h1.innerText = tValue;
    img.src = imgValue;
    p.innerText = nValue;
    divVideo.innerHTML = videoValue
    cleanInputs()
    saveNews();
};

document.addEventListener('click', (e) => {

    let el = e.target;
    if (el.classList.contains('btnDelete')) {
        el.parentElement.remove();
        saveNews();
    }
});

function createArticle() {

    article = document.createElement('article')
    article.classList.add('insertedNews')
    return article;  
};

function createH1() {

    let h1 = document.createElement('h1')
    h1.classList.add('insertedTitle')
    return h1;
};

function createButtonDelete() {

    let buttonDelete = document.createElement('button')
    buttonDelete.innerText = 'Apagar notícia';
    buttonDelete.classList.add('btnDelete')
    buttonDelete.setAttribute('title','Apagar matéria completa')
    return buttonDelete;
};

function createDiv() {

    let div = document.createElement('div')
    div.classList.add('insertedDivImg')
    return div;
};

function createDivVideo() {

    let div = document.createElement('div')
    div.classList.add('insertedDivVideo')
    return div;
};

function createImg() {
    let img = document.createElement('img')
    img.classList.add('insertedImg')
    return img;
};

function createP() {

    let p = document.createElement('p')
    p.classList.add('insertedTextNews')
    return p;
};

function saveNews() {

    let titles = containerInsertedNewsEl.querySelectorAll('.insertedTitle')

    let arrayAllTitles = [];
        for(let title of titles) {
            let titleText = title.innerText.trim();
            arrayAllTitles.push(titleText)
        } 
        
    let titlesJSON = JSON.stringify(arrayAllTitles)
        localStorage.setItem('titles', titlesJSON)

    let News = containerInsertedNewsEl.querySelectorAll('.insertedTextNews')

    let arrayAllNews = [];
        for(let news of News) {
            let newsText = news.innerText.trim();
            arrayAllNews.push(newsText)
        }
    
    let NewsJSON = JSON.stringify(arrayAllNews)
        localStorage.setItem('News', NewsJSON)

    let imgs = containerInsertedNewsEl.querySelectorAll('.insertedImg')

    let arrayAllImgs = [];
        for(let img of imgs) {
            let imgLink = img.src
            arrayAllImgs.push(imgLink)
        }
    
    let imgsJSON = JSON.stringify(arrayAllImgs)
        localStorage.setItem('imgs', imgsJSON )


    let videos = containerInsertedNewsEl.querySelectorAll('.insertedDivVideo');
        
    let arrayAllVideos = [];
        for(let video of videos) {
            let videoLink = video.innerHTML
            arrayAllVideos.push(videoLink)
        }
            
    let videosJSON = JSON.stringify(arrayAllVideos)
        localStorage.setItem('videos', videosJSON )
};
 
function addSavedNews() {

    let titles = localStorage.getItem('titles');
    let arrayAllTitles = JSON.parse(titles);

    let News = localStorage.getItem('News');
    let arrayAllNews = JSON.parse(News);

    let imgs = localStorage.getItem('imgs');
    let arrayAllImgs = JSON.parse(imgs)

    let videos = localStorage.getItem('videos');
    let arrayAllVideos = JSON.parse(videos)

        for (let i= 0;i < arrayAllTitles.length; i++) {
            insertCompleteNews(arrayAllTitles[i],arrayAllNews[i],arrayAllImgs[i],arrayAllVideos[i]);
        }
};
    
initializeFunctions()