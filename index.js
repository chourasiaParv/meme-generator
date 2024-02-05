const geneMemeBtn = document.querySelector('.meme-gen .generate-meme-btn')
const memeImg = document.querySelector('.meme-gen img')
const memeTitle = document.querySelector('.meme-gen .meme-title')
const memeAuthor = document.querySelector('.meme-gen .meme-author')


const updateDetails = (url, title, author)=>{
    memeImg.setAttribute('src', url)
    memeAuthor.innerHTML = `Meme by: ${author}`;
    memeTitle.innerHTML =  title
}


const generateMeme=()=>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response)=> response.json()).then(data=>{
        updateDetails(data.url, data.title,  data.author)
    });

};

geneMemeBtn.addEventListener('click', generateMeme)

