const memeBtn = document.querySelector('.generate-meme-btn');
const memeImg = document.querySelector('.memeImg');
const memeTitle = document.querySelector('.meme-title');
const memeAuthor = document.querySelector('.meme-author');

const updateDetails = (url, title, author) => {
    memeImg.setAttribute('src', url);
    memeTitle.textContent = title;
    memeAuthor.textContent = `Meme by: ${author}`;
}

const generateMeme = () => {
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then(response => response.json())
    .then(data => {
        updateDetails(data.url, data.title, data.author)
        console.log(data)
    })
}

memeBtn.addEventListener('click', generateMeme);
